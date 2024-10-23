import { fail } from '@sveltejs/kit';

const API_URL = process.env.VITE_API_URL;

export const load = async ({ locals, params }) => {
    const user = locals.user;
    const userId = params.userId || user?._id;

    if (!userId) {
        return fail(400, { error: 'User ID is required' });
    }
        
        return {
            user: user
        };
}
    


export const actions = {
    updateProfile: async ({ request, locals }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const bio = formData.get('bio');

        const userId = locals.user._id; // Obtener el ID del usuario desde `locals`

        const avatarFile = formData.get('avatar');

        if (avatarFile && avatarFile instanceof File) {
            const avatarData = new FormData();
            avatarData.append('avatar', avatarFile);
            avatarData.append('name', name);
            avatarData.append('email', email);
            avatarData.append('phone', phone);
            avatarData.append('address', address);
            avatarData.append('bio', bio);

            console.log('Contenido de avatarData:', avatarData);

            // Enviar los datos al servidor
            try {
                const response = await fetch(`${API_URL}/users/${userId}`, {
                    method: 'PUT', // o 'POST' dependiendo de tu API
                    body: avatarData
                });

                // Manejar la respuesta del servidor
                if (response.ok) {
                    console.log('Datos enviados correctamente');
                } else {
                    console.error('Error al enviar los datos');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }
    }
};