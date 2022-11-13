import { StateActionCustom } from "./types"

export const DELETE_BOOK = 'DELETE_BOOK'

export function removeBookAction(loading: boolean) {
    const action: StateActionCustom = {
      type: DELETE_BOOK,
      loading: loading
    }
    return  action
  }