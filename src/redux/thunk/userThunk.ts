// userThunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '@/services/userApi';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
  };
}

export const loginAsync = createAsyncThunk<LoginResponse, { username: string; password: string }, { rejectValue: { error: string } }>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      return response.data; 
    } catch (error: any) {
      return rejectWithValue({ error: 'Đăng nhập thất bại. Vui lòng thử lại.' });
    }
  }
);

