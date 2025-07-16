import { renderHook, act } from '@testing-library/react';
import { useGenerateFormattedDate } from '../useGenerateFormattedDate';
//mysqlのdbにinsertできるようにする
describe('基本仕様', () => {
    test('日付取得', () => {
        const strDate = '2024-04-03 03:12:30';
        expect(useGenerateFormattedDate(strDate).formattedDate).toBe('2024-04-02 12:12:30');
    });
}); 