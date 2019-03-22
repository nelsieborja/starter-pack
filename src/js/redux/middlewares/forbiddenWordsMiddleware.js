import { FORBIDDEN_WORDS } from 'Constants/security';
import { ADD_TODO, FOUND_BAD_WORD } from '../action-types';

const forbiddenWordsMiddleware = ({ dispatch }) => next => action => {
  const { type, payload } = action;

  if (type === ADD_TODO) {
    const foundBadWord = FORBIDDEN_WORDS.some(word => payload.includes(word));

    if (foundBadWord) {
      return dispatch({ type: FOUND_BAD_WORD });
    }
  }

  //  Returns `next(action)` to keep the flow alive
  return next(action);
};

export default forbiddenWordsMiddleware;
