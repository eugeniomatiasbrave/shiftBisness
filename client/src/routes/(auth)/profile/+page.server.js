import { fail } from '@sveltejs/kit';

const API_URL = process.env.VITE_API_URL;
const DEFAULT_AVATAR_URL ='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

export const load = async ({ locals, params }) => {
    const user = locals.user;
    const userId = params.userId || user?._id;

    if (!userId) {
        return fail(400, { error: 'User ID is required' });
    }

    const response = await fetch(`${API_URL}/users/${userId}`);
    if (!response.ok) {
        return {
            status: response.status,
            error: 'Error al obtener la información del usuario'
        };
    }

    const userData = await response.json();

    return {
        user: userData
         // aqui llega la imagen web.
         // 21/10 11.59 am      
    };
};

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
        //console.log('Avatar File:', avatarFile); 
        // aqui llega la imagen de +page.svelte .
        // 21/10 13:21 pm  

        if (avatarFile && avatarFile instanceof File) {
            const avatarData = await avatarFile.arrayBuffer();
            const avatarBase64 = Buffer.from(avatarData).toString('base64');
            const avatar = `data:${avatarFile.type};base64,${avatarBase64}`;
        
            // Preparar los datos para el envío
            const body = {
                avatar: avatar || DEFAULT_AVATAR_URL,
                name: name,
                email: email,
                phone: phone,
                address: address,
                bio: bio
            };
        
            console.log('Contenido de body:', body); 
            // aqui llega la imagen en formato base64 .
            // 21/10 14:03 pm 


            // Enviar los datos al servidor
            try {
                const response = await fetch(`${API_URL}/users/${userId}`, {
                    method: 'PUT', // o 'POST' dependiendo de tu API
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
        
                if (!response.ok) {
                    throw new Error('Error en la actualización del usuario');
                }
        
                const result = await response.json();
                console.log('Usuario actualizado exitosamente:', result);
            } catch (error) {
                console.error('Error al actualizar el usuario:', error);
            }
        }


    }
        
};