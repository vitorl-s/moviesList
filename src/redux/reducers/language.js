import {LANGUAGE} from '../constants/index';

const initialState = {
  language: '',
};

const LanguageReducer = (state = initialState, action) => {
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
