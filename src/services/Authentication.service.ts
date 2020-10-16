import http from '../utils/http';

export interface User {
    _id: string;
    user: string;
    email: string;
    role: 'admin' | 'customer';
    token: string;
    createdAt: string;
    updatedAt: string;
}

export const singInUser = async (user: string, pass: string) => {
    const { data } = await http
        .post<User>('/authentication/login', { user, pass });
    return data;
}