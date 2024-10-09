import { fail } from "@sveltejs/kit";
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
        const userId = locals.user._id; // Obtener el ID del usuario desde `locals`

        
        const body = {date, hour, duration, status, description, price };
        
        

        if (!date || !hour || !duration || !status || !description || !price) {
            return fail(400, { date, hour, duration, status, description, price, missing: true });
        }

        // Crear el turno y agregarlo al usuario
        const shiftRes = await fetch(`${API_URL}/users/${userId}/shifts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (shiftRes.status !== 200) {
            const resBody = await shiftRes.json();
            return fail(shiftRes.status, resBody);
        }
       
		const resBody = await shiftRes.json();

        console.log("resBody client:", resBody);
	
        return {
           status: 200,
           body: { message: "Register successful", data: resBody }
	    };
}
};