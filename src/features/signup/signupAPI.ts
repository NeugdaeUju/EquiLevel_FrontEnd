import apiRequest from "../../api/api.ts";

export const signupUser = async (email: string, password: string) => {
    const response = await apiRequest.post('/auth/signup', { email, password });
    return response.data;
};