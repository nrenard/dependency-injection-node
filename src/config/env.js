import dotEnv from 'dotenv';

const ENV = process.env.NODE_ENV;

export default () => {
  dotEnv.config({
    path: (ENV && ENV !== 'production') ? `.env.${ENV}` : '.env',
  });
};
