import axios from 'axios'
import * as actionTypes from './ActionTypes'


export const fetchStatement = () => {
  return (dispatch) => {
    dispatch(fetchStatementRequest())
    axios
      .get('http://localhost:3001/getuser/getHome')
      .then(response => {
        // response.data is the statements coming from server
        const statements = response.data
        console.log(statements)
        dispatch(fetchStatementSuccess(statements))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchStatementFailure(error.message))
        console.log(error.message)
      })
  }
}

export const fetchStatementRequest = () => {
    console.log("insidefetchuser")
  return {
    type: actionTypes.FETCH_STATEMENT_REQUEST
  }
}

export const fetchStatementSuccess = statements => {
    console.log("state is udating")
  return {
    type: actionTypes.FETCH_STATEMENT_SUCCESS,
    payload: statements
  }
}

export const fetchStatementFailure = error => {
  return {
    type: actionTypes.FETCH_STATEMENT_FAILURE,
    payload: error
  }
}
// export const sortBy = (key) =>{
  
//   const sorted = key.sort((a,b) => b.t_id - a.t_id)
//   return{
//     type :actionTypes.SORT_PRICE,
//     // payload : key.sortBy((a,b) => a < b)
//     // payload : key.sort((a,b) => b.t_id - a.t_id)
//     payload : sorted
//   }
// }

// export const setSort = (sortDirection, sortKey) => ({
//   type: actionTypes.SET_SORT,
//   sortDirection,
//   sortKey
// });
// export const sort = (sortDirection = 'desc', sortKey = 'amount') => dispatch => {
//   dispatch(setSort(sortDirection, sortKey));
//   console.log("inside setsort")
//   return Promise.resolve();
// };


export const sortArray = (sortStatement) =>{
  const sorted = sortStatement.sort((a,b) => b['amount'] - a['amount'])
  console.log(sorted)
  return{
    type : actionTypes.SET_SORT, 
    payload :sorted
  }
}