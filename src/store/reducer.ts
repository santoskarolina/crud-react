import { AplicationState, GenericAction } from './types';
import { GET_BOOK_REQUEST, GET_BOOK_SUCESS } from './actions';
import produce from 'immer';

export const initialState : AplicationState = {
  loading: true, 
  books: []
}

const reducer = (state = initialState, action: GenericAction ) => {
  if(action.type === GET_BOOK_REQUEST){
    return produce(state, draft => {
      draft.loading = true;
    });
  }
  if(action.type === GET_BOOK_SUCESS){
    return produce(state, draft => {
      draft.loading = false;
      draft.books = action.books;
    });
  }

    return state
  }

  
  export default reducer