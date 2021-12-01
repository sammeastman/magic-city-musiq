require ("dotenv").config();
import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRouter);

const port = 3000;
app.listen(3000, () => console.log(`Server listening on port: 3000`));
