//URLによるルーティング規則
import express from 'express';
import { Controller } from './controller';

const router = express.Router();

export const IncomeCategoryRouter = () => {
    router.get('/incomesCategory', Controller.readAllIncomesCategory);
    router.post('/incomesCategory/add', Controller.insertIncomesCategory);
    router.delete('/incomesCategory/delete/:id', Controller.deleteIncomesCategory);
    router.put('/incomesCategory/update', Controller.updateIncomesCategory);
}