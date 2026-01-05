const BASE_URL = 'https://localhost:3000';
const token = localStorage.getItem('token');

export async function apiRequest(
    endpoint: string,
    options: RequestInit = {}
) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
        ...options,
    });
    
    if (!response.ok) {
        const error = await response.json();
        throw error;
    };

    return response.json();
}