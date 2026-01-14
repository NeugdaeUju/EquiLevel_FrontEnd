import apiRequest from '../../api/api.ts';

export const especesCreate = async (name: string) => {
    try {
        const response = await apiRequest.post('/especes', {
            name,
        });
        return response.data;
    } catch (error: any) {
        if (!error.response) {
            throw 'Impossible de contacter le serveur';
        }
        if (error.response.status === 400) {
            throw "Veuillez indiquer le nom de l'espece";
        }
        if (error.response.status === 401) {
            throw "Erreur d'authentification";
        }
        throw 'Une erreur est survenue';
    }
}

export const especesGet = async () => {
    try {
        const response = await apiRequest.get('/especes');
        return response.data
    } catch (error: any) {
        if (!error.response) {
            throw 'Impossible de contacter le serveur';
        }
        if (error.response.status === 400) {
            throw "Aucune espèce trouvée";
        }
        if (error.response.status === 401) {
            throw "Erreur d'authentification";
        }
        throw 'Une erreur est survenue';
    }
}

/* 
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
*/