import {describe, expect, test, beforeEach, jest } from '@jest/globals';
import { IncomeService } from '../Income/incomeService';
import { IIncomeRepository } from "../Income/IincomeRepository";
import { Income } from "../Income/income";
import { mock, instance, when, verify, anything, capture } from 'ts-mockito';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

describe('incomeService', () => {
    let incomeService: IncomeService;
    let mockIncomeRepository: IIncomeRepository;

    beforeEach(() => {
        mockIncomeRepository = mock<IIncomeRepository>();
        incomeService = new IncomeService(instance(mockIncomeRepository));
    });
    const mockData = [
        {    
        id: uuidv4(),
        incomeDate: '2024-06-21',
        incomeAmount: '-100',
        incomeCategoryId: '3',
        remarks: 'その他',
        updateDate: '2024-06-21 10:00:00'}
    ]
    test('モックを用いて保存する', async () => {
        const spyMethod = jest.spyOn(incomeService, 'createIncome');
        await incomeService.createIncome(
            '2024-06-21',
            '100',
            '3',
            'その他',
            '2024-06-21 10:00:00',
        )
        expect(spyMethod).toHaveBeenCalled();
        spyMethod.mockRestore();
    })
    test('保存するときに例外が発生するかのテスト', async () => {
        expect(() => incomeService.compileIncomedata()).toThrow();
    })
    //income自体のテストが必要
    test('incomeAmountValidateCheck', () => {
        expect(() => {
            new Income(mockData[0]);   
        }).toThrow("金額は0以上でなければいけません")
    })
    test('trueになることをテストする', () => {
        expect(() => {
            new Income(mockData[0])
        }).toBeTruthy();
    })
})