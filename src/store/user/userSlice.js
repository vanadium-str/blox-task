import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  token: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUserName, setToken } = userSlice.actions;

export default userSlice.reducer;