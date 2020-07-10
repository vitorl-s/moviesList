import {LANGUAGE} from '../constants/index';

export function SaveLanguage(language) {
  return {
    type: LANGUAGE,
    language,
  };
}
