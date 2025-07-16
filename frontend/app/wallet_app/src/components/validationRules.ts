export const validateCategoryName = {
  name:{
    required: '入力してください。',
    maxLength: { value: 10, message: '文字数をオーバーしています。' }
  }
}

export const validateSelectBox = (value:number | '') => value !== '' || 'いずれかを選択してください。'

export const validateNumber = (val: any) => {
    if(val == null || val === undefined || val === ''){
        return '金額を入力してください。';
    }
    if(isNaN(val)){
        return '数字を入力してください。'
    }
    return true;
}

export const validateRemarks = {
  maxLength: {
      value: 100,
      message: '文字数が超過しています。'
  }
}

export const validateNullOrUndifined = {
  inputValue: {
    required: true,
  }
}