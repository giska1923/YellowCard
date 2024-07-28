import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  PORT: process.env.PORT || 3000,
  EXTERNAL_API: process.env.EXTERNAL_API,
  API_TOKEN: process.env.API_TOKEN,
  PER_PAGE: process.env.PER_PAGE,
  corsOptions: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
};

export default appConfig;
