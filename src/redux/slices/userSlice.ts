import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginAsync } from "../thunk/userThunk"; 

interface UserState {
  token: string | null;
  user: { id: string; username: string } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null; 
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Đăng nhập thất bại';
      });
  },
});

export const { logout } = userSlice.actions; 
export default userSlice.reducer;
