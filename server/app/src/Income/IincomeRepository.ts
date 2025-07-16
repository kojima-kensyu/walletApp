import { Income } from './income';

export interface IIncomeRepository {
    save: (income: Income) => Promise<void>;
    findIncomeByCategoryId: (categoryId: string) => Promise<Income | null>;
    deleteData: (categoryId: string) => Promise<void>;
    selectAllIncomeData: () => Promise<Income[] | null>;
}