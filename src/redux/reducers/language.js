import {LANGUAGE} from '../constants/index';

const initialState = {
  language: '',
};

const LanguageReducer = (state = initialState, action) => {
  console.log('valor da actionsssssssssss', action.language);
  switch (action.type) {
    case LANGUAGE:
      return {
        language: action.language,
      };
    default:
      return state;
  }
};

export default LanguageReducer;
