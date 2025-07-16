interface IncomeParams {
    id: any;
    incomeDate: string;
    incomeAmount: string;
    incomeCategoryId: string;
    remarks: string;
    updateDate: string;
}
export class Income {
    id: string;
    incomeDate: string;
    incomeAmount: string;
    incomeCategoryId: string;
    remarks: string;
    updateDate: string;
    constructor(
        params: IncomeParams
        ){
        this.isValidAmount(params.incomeAmount);

        this.id=params.id;
        this.incomeDate=params.incomeDate;
        this.incomeAmount=params.incomeAmount;
        this.incomeCategoryId=params.incomeCategoryId;
        this.remarks=params.remarks;
        this.updateDate=params.updateDate;
    }
    //バリデーションを記述する
    private isValidAmount(incomeAmount: string){
        const checkNumber = Number(incomeAmount);
        if(checkNumber < 0){
            throw new Error("金額は0以上でなければいけません")
        }
    }
    changeIncomeDate(newDate: string){
        this.incomeDate = newDate;
    }
    changeIncomeAmount(newIncomeAmount: string){
        this.incomeAmount = newIncomeAmount;
    }
    changeRemarks(newRemarks: string){
        this.remarks = newRemarks;
    }
    changeIncomeCategoryId(newIncomeCategoryId: string){
        this.incomeCategoryId = newIncomeCategoryId;
    }
}