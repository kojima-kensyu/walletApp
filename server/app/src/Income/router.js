import express from 'express';
import { getAllIncomes, readAllIncomes } from './controller'
const router = express.Router();

export const IncomeRouter = () => {
    // router.get('/incomes', readAllIncomes);
    router.get('/incomes', getAllIncomes);
    // router.post('/incomes/add', Controller.insertIncomes);
    // router.delete('/incomes/delete/:id', Controller.deleteIncomes);
    // router.put('/incomes/update', Controller.updateIncomes);
    return router;
}
