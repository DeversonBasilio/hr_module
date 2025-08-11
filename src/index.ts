import express, {Request, Response} from 'express';
import 'dotenv/config';
import { Sequelize, Dialect  } from 'sequelize';

require('dotenv').config();
const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
    dialect: process.env.POSTGRES_DIALECT as Dialect,
  });
  
  sequelize.authenticate().then(() => {
    res.send('Database connection established successfully!');
  }).catch((error) => {
    console.error('Unable to connect to the database:', error);
    res.status(500).send('Database connection failed');
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
