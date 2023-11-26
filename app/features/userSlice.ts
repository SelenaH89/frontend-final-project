import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  name: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  name: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{ email: string; name: string; password: string }>,
    ) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    unSetUserInfo: (state) => {
      state.email = '';
      state.name = '';
      state.password = '';
    },
  },
});

export const { setUserInfo, unSetUserInfo } = userSlice.actions;
export default userSlice.reducer;
