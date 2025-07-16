import express from 'express';
import bodyParser from 'body-parser';
import { IncomeRouter } from './Income/router';
import { IncomeCategoryRouter } from './Income_category/router';
import cors from 'cors';

const port = 3001;
const app = express();

app.use(cors());
// app.options('/', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/income', IncomeRouter());
// app.use('api/incomeCategory', IncomeCategoryRouter());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});