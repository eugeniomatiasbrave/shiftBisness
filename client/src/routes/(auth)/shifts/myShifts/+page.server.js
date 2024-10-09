const API_URL = process.env.VITE_API_URL;

export const load = async ({locals}) => {
   
	const userId = locals.user._id
	
    const getShiftsToUserId = async () => {
        const response = await fetch(`${API_URL}/shifts/user/${userId}`);
        const data = await response.json();
        return data;
    };

    return {
        shifts: await getShiftsToUserId(userId),
    };
}