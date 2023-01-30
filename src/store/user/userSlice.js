import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetAll: () => {
      return initialState;
    },
  },
});

export const { setToken, resetAll } = userSlice.actions;

export default userSlice.reducer;
