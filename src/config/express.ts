import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import routes from '../api/routes';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// security headers
app.use(helmet());
app.use(cors());

// gzip compression
app.use(compress());

// mount api routes
app.use(routes);

export default app;
