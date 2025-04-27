import api from "@/lib/axios";

export const login = async (credentials: { username: string; password: string }) => {
    return await api.post('/api/login', credentials);
};
