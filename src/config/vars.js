import path from 'path';

// import .env variables
require('dotenv-safe')
  .load({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example'),
  });

export default {
  env: process.env.NODE_ENV,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI
};
