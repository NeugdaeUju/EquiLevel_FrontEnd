import apiRequest from "../../api/api.ts";

export const loginUser = async (email: string, password: string) => {
    const response = await apiRequest.post('/auth/login', { email, password });
    return response.data;
};