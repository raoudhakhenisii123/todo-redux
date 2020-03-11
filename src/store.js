// import { createStore, combineReducers } from 'redux'
import { createStore } from 'redux'
import rootReducer from './reducer'

export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
// import itemsReducer from './reducers/items';
// import setitemReducer from './reducers/setItem'

// const setitemReducer = (state = '', action) => {

//     if (action.type === 'SETitem') 
//     { return action.item }
//     return state
// }

// const itemsReducer = (state = [], action) => {
//     if (action.type === 'ADD_item') {
//        return state.concat(action.item) }
       
//     if (action.type === 'EDIT_item') {
//       return state.map(m => {
//         if (m.id === action.id) {
//           return action.item
//         }
//         return m;
//       })
//     }
//     if (action.type === 'DELETE_item') {
//       return  state.filter(m=>{
//         if (m.id===action.id)
//       { return false}
//       return true
  
//     })}
//     return state
  
//   }


// const store = createStore(combineReducers({
//     items: itemsReducer,
//     inputtodo: setitemReducer
// }))

// store.dispatch({ type: 'ADD_item', item: 'khenissi' })
// console.log(store.getState())

// export default store