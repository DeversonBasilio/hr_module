import express, {Request, Response} from 'express';
import 'dotenv/config'

require('dotenv').config()
const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
