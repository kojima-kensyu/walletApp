import { IIncomeRepository } from './IincomeRepository';
import { Income } from './income';

export class IncomeRepository implements IIncomeRepository {
    database: any;
    constructor(database: any){
        this.database = database;
    }
    async save(Income: Income): Promise<void>{
        await this.database.query(
        `INSERT INTO incomes (
            id,
            income_date,
            income_amount,
            income_category_id,
            remarks,
            update_date
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [Income.id, Income.incomeDate, Income.incomeCategoryId, Income.remarks, Income.updateDate]
    );}
    async findIncomeByCategoryId(categoryId: string): Promise<Income>{
        return await this.database.query(
            `SELECT * FROM incomes WHERE income_category_id = ?`,[categoryId]
        )
    }
    //ここから
    async deleteData(categoryId: string): Promise<void>{
        return await this.database.query(
            `DELETE FROM incomes WHERE id = "${categoryId}"`
        )
    }
    async selectAllIncomeData() {
        const [rows] = await this.database.promise().query('SELECT * FROM incomes');
        return rows;
    }
    
}