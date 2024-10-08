import { fail, redirect } from "@sveltejs/kit";
const API_URL = process.env.VITE_API_URL;

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const date = formData.get("date");
        const hour = formData.get("hour");
        const duration = formData.get("duration");
        const status = formData.get("status");
        const description = formData.get("description");
        const price = formData.get("price");
        const userId = locals.user.id; // Obtener el ID del usuario desde `locals`

        const body = { date, hour, duration, status, description, price };

        if (!date || !hour || !duration || !status || !description || !price) {
            return fail(400, { date, hour, duration, status, description, price, missing: true });
        }
        
        // Crear el turno
        const shiftRes = await fetch(`${API_URL}/shifts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (shiftRes.status !== 200) {
            const shiftResBody = await shiftRes.json();
            return fail(shiftRes.status, shiftResBody);
        }

        const shiftResBody = await shiftRes.json();
        const shiftId = shiftResBody.data._id; // Obtener el ID del turno creado

        // Asociar el turno al usuario
        const userShiftRes = await fetch(`${API_URL}/users/${userId}/shift/${shiftId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (userShiftRes.status !== 200) {
            const userShiftResBody = await userShiftRes.json();
            return fail(userShiftRes.status, userShiftResBody);
        }

        throw redirect(303, '/shifts');
    }
};