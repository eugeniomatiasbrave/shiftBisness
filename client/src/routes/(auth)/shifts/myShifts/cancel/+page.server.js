import { redirect } from '@sveltejs/kit';
const API_URL = process.env.VITE_API_URL;

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const sid = formData.get('sid');

        if (!sid) {
            return { success: false, error: 'Shift ID is required' };
        }

        const result = await fetch(`${API_URL}/shifts/${sid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            return { success: false, error: 'Error canceling shift ' };
        }

        throw redirect(303, '/shifts/myShifts');
    }
}