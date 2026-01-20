import apiRequest from '../../api/api.ts';

export const racesCreate = async (name: string, especeId: string) => {
    try {
        const response = await apiRequest.post('/races', {
            name,
            especeId,
        });
        return response.data;
    } catch (error: any) {
        if (!error.response) {
            throw 'Impossible de contacter le serveur';
        }
        if (error.response.status === 400) {
            throw "Veuillez indiquer le nom de la race et/ou l'espece";
        }
        if (error.response.status === 401) {
            throw "Erreur d'authentification";
        }
        throw 'Une erreur est survenue';
    }
}

export const racesGet = async () => {
    try {
        const response = await apiRequest.get('/races');
        return response.data
    } catch (error: any) {
        if (!error.response) {
            throw 'Impossible de contacter le serveur';
        }
        if (error.response.status === 400) {
            throw "Aucune race trouvée";
        }
        if (error.response.status === 401) {
            throw "Erreur d'authentification";
        }
        throw 'Une erreur est survenue';
    }
}