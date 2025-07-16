import { IIncomeRepository } from "./IincomeRepository";
import { Income } from './income';
import { v4 as uuidv4 } from 'uuid';

export class IncomeService {
    private incomeRepository: IIncomeRepository;

    constructor(incomeRepository: IIncomeRepository){
        this.incomeRepository = incomeRepository;
    }

    async createIncome(
        newIncomeDate: string,
        newIncomeAmount: string,
        newIncomeCategoryId: string,
        newRemarks: string,
        newUpdateDate: string,
    ){
        const uidValue = uuidv4();
        const newIncome = new Income({
            id: uidValue,
            incomeDate: newIncomeDate,
            incomeAmount: newIncomeAmount,
            incomeCategoryId: newIncomeCategoryId,
            remarks: newRemarks,
            updateDate: newUpdateDate,
        }
        )
        await this.incomeRepository.save(newIncome);
    }
    async deleteIncome(categoryId: string){
        return await this.incomeRepository.deleteData(categoryId);
    }
    updateIncome(){

    }
    async findByCategoryId(categoryId: string){
        return await this.incomeRepository.findIncomeByCategoryId(categoryId);
    }
    static greet(name: string){
        return `Hello ${name}`;
    }
    compileIncomedata = () => {
        throw new Error('wrong income data');
    }
    async getAllIncomes(){
        return await this.incomeRepository.selectAllIncomeData();
    }
}