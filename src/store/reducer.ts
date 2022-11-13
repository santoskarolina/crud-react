import { AplicationState, GenericAction } from './types';
import { GET_BOOK_REQUEST, GET_BOOK_SUCESS, GET_BOOK_REQUEST_ERROR, GET_BOOK_BY_ID_REQUEST, GET_BOOK_BY_ID_SUCESS } from './actions';
import produce from 'immer';

export const initialState : AplicationState = {
  loading: true, 
  loadingBook: false,
  books: [],
  book: null
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

  if(action.type === GET_BOOK_REQUEST_ERROR){
    return produce(state, draft => {
      draft.loading = false;
      draft.books = [];
    });
  }

  if(action.type === GET_BOOK_BY_ID_REQUEST){
    return produce(state, draft => {
      draft.loadingBook = true;
    });
  }

  if(action.type === GET_BOOK_BY_ID_SUCESS){
    return produce(state, draft => {
      draft.loadingBook = false;
      draft.book = action.book;
    });
  }


    return state
  }

  
  export default reducer