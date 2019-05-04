import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants'

const initialState = {
  searchField: ''
}

export const searchPeople = (state=initialState, action={}) =>{
    switch(action.type) {
      case CHANGE_SEARCH_FIELD:
        return ({}, state, {searchField: action.payload})
      default:
        return state;
    }
} 

const initialStateCats = {
  isPending: false,
  people: [],
  error: '',
}

export const requestPeople = (state=initialStateCats, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
        return Object.assign({}, state, { people: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
    return state;
  }
}