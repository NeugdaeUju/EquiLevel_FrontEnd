import apiRequest from "../../api/api.ts";

export const loginUser = async (email: string, password: string) => {
    try{
        const response = await apiRequest.post('/auth/login', {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        if (!error.response) {
            throw 'Impossible de contacter le serveur';
        }
        if (error.response.status === 400) {
            throw 'Veuillez remplir tous les champs';
        }
        if (error.response.status === 401) {
            throw 'Identifiants incorrects';
        }
        throw 'Une erreur est survenue';
    };
};