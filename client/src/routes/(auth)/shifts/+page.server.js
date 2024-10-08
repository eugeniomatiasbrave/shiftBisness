import { redirect } from '@sveltejs/kit';

const API_URL = process.env.VITE_API_URL;

export const actions = {
	default: async ({ request }) => {
			const formData = await request.formData();
			const date = formData.get("date");
			const hour = formData.get("hour");
			const duration = formData.get("duration");
			const status = formData.get("status");
			const description = formData.get("description");
			const price = formData.get("price");

			const body = { date, hour, duration, status, description, price };

		    const result = await fetch(`${API_URL}/shifts`, {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(body),
		    });

		if (!result.ok) {
			return { success: false, error: 'Error' };
		}

		throw redirect(303, '/shifts');
	}
}

      