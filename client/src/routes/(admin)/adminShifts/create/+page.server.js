import { fail } from "@sveltejs/kit";
const API_URL = process.env.VITE_API_URL;

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const userId = locals.user._id; // Obtener el ID del usuario desde `locals`
        const date = formData.get("date");
        const dayOfWeek = formData.get("dayOfWeek");
        const hour = formData.get("hour");
        const duration = formData.get("duration");
        const status = formData.get("status");
        const description = formData.get("description");
        const price = formData.get("price");

        const body = { userId, date, dayOfWeek, hour, duration, status, description, price };

       

        if (!userId || !date || !dayOfWeek || !hour || !duration || !status || !description || !price) {
            return fail(400, { userId, date, dayOfWeek, hour, duration, status, description, price, missing: true });
        }

        const res = await fetch(`${API_URL}/shifts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (res.status !== 200) {
            const resBody = await res.json();
            return fail(res.status, resBody);
        }

        const resBody = await res.json();

        return {
            status: 200,
            body: { message: "Register successful", data: resBody }
        };
    }
};