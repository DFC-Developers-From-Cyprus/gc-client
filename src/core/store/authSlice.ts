import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  uuid: string;
  username: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
})

export const { setUser, logout} = authSlice.actions;
export default authSlice.reducer;