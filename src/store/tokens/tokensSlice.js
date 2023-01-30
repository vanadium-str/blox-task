import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = tokensSlice.actions;

export default tokensSlice.reducer;
