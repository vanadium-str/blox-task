import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const handlers = [
  rest.get('/tokens-info', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(tokensInfo.data))
    );
  }),

  rest.post('/user/tokens', async (req, res, ctx) => {
    const request = await req.json();
    const result = await request;
    const filteredTokens = tokensInfo.data.filter((item) => result.tokenIds.includes(item.tokenId));

    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(filteredTokens))
    );
  }),
];

const tokensInfo = {
  data: [
    {
      tokenId: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      price: faker.finance.amount(6000, 10000),
      percentChange1h: faker.finance.amount(0, 1, 2),
      percentChange24h: faker.finance.amount(0, 1, 2),
      percentChange7d: faker.finance.amount(8, 15, 2),
      icon: 'https://cdn-icons-png.flaticon.com/512/46/46775.png',
    },
    {
      tokenId: 2,
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      price: faker.finance.amount(6000, 10000),
      percentChange1h: faker.finance.amount(0, 1, 2),
      percentChange24h: faker.finance.amount(0, 1, 2),
      percentChange7d: faker.finance.amount(8, 15, 2),
      icon: 'https://cdn-icons-png.flaticon.com/512/46/46775.png',
    },
    {
      tokenId: 3,
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      price: faker.finance.amount(6000, 10000),
      percentChange1h: faker.finance.amount(0, 1, 2),
      percentChange24h: faker.finance.amount(0, 1, 2),
      percentChange7d: faker.finance.amount(8, 15, 2),
      icon: 'https://cdn-icons-png.flaticon.com/512/46/46775.png',
    },
    {
      tokenId: 4,
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      price: faker.finance.amount(6000, 10000),
      percentChange1h: faker.finance.amount(0, 1, 2),
      percentChange24h: faker.finance.amount(0, 1, 2),
      percentChange7d: faker.finance.amount(8, 15, 2),
      icon: 'https://cdn-icons-png.flaticon.com/512/46/46775.png',
    },
  ],
};
