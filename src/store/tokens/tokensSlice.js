import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      tokenId: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      price: 6648.45,
      percentChange1h: 0.21,
      percentChange24h: 0.59,
      percentChange7d: 11.58,
      icon: 'https://resources.blox.io/icons/bitcoin.png',
    },
    {
      tokenId: 2,
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      price: 6648.45,
      percentChange1h: 0.21,
      percentChange24h: 0.59,
      percentChange7d: 11.58,
      icon: 'https://resources.blox.io/icons/bitcoin.png',
    },
  ],
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
