import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes';

dotenv.config();
const app: Application = express();
const port = process.env.APP_PORT || 3000;

// Body parsing middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));

// Serve swagger.json file statically
app.use('/swagger', express.static('src/swagger'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(
  undefined,
  {
    swaggerOptions: {
      url: '/swagger/swagger.json',
    },
  }
));

RegisterRoutes(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
