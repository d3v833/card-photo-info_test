import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text 
  }
}

//payload is used in redux to send whatver data is needed to the reducer