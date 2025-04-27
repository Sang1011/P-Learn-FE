import { login } from '@/services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
  };
}

export const loginAsync = createAsyncThunk(
  'user/loginAsync',
  async (credentials: { username: string; password: string }) : Promise<LoginResponse> => {
    const response = await login(credentials);
    return response.data;
  }
);
