import { DELETE_BOOK } from './actionsCreator';
import { StateActionCustom, StateCustom } from './types.d';
export const initialState = {loading: true}

const reducer = (state: StateCustom = initialState,action: StateActionCustom) => {
   if(action.type === DELETE_BOOK) {
        return {...state, loading: action.loading}
    }

    return state
  }
  
  export default reducer