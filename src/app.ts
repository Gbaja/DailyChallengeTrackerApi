require('dotenv').config();
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import config from 'config';

import logger from './utils/logger';
import connect from './utils/connect';
import routes from './routes';
import checkJwt from './utils/jwt';
interface Error {
  status?: number;
}

const port = config.get<number>("port")
const app = express();

// TODO: check if helmet can be added
app.use(express.json())
app.use(checkJwt);
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(err.status || 500).json(err);
});

app.listen(port, async () => {
  console.log(process.env.HELLO)
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app)
})
