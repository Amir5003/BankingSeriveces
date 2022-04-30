import * as actionTypes from './ActionTypes'

const initialState = {
  loading: false,
  statements: [],
  error: '',
  
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STATEMENT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_STATEMENT_SUCCESS:
      return {
        loading: false,
        statements: action.payload,
        error: ''
      }
    case actionTypes.FETCH_STATEMENT_FAILURE:
      return {
        loading: false,
        statements: [],
        error: action.payload
      }
    case actionTypes.SET_SORT:
      return{
  
        statements:action.payload
      }
    default: return state
  }
}

export default Reducer