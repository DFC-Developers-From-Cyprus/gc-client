import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, forgotPassword } from '@/api/auth';

// Регистрация
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data: { email: string; password: string }) => {
    return await register(data);
  },
);

// Вход
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: { email: string; password: string }) => {
    return await login(data);
  },
);

// Восстановление пароля
export const requestPasswordReset = createAsyncThunk(
  'auth/requestPasswordReset',
  async (data: { email: string }) => {
    return await forgotPassword(data);
  },
);

// Срез
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Регистрация
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Registration failed';
      })
      // Вход
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      // Восстановление пароля
      .addCase(requestPasswordReset.fulfilled, () => {
        // обработка
      });
  },
});
