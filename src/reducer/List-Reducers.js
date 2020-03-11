import { ADD_LIST, EDIT_LIST, DELETE_LIST,COMPLETED_LIST, SAVED_LIST,  CLEAR_LIST} from '../actions/types'
import { v1 as uuidv1 } from 'uuid';

const initialState={
    items:[
    {id:uuidv1(),
    item:'item1',
    completed:false},
    {id:uuidv1(),
     item:'item2',
     completed:false },
    {id:uuidv1(),
    item:'item3',
    completed:false,}
], 

saved:null}

const ListReducers=(state=initialState, action)=>{
    switch(action.type){
        case ADD_LIST: 
        return{
            ...state,
            items:state.items.concat(action.payload)
        }
        case EDIT_LIST:
            return{
                ...state,
                items:state.items.map(el=> el.id===action.payload)

            }
        case  DELETE_LIST:
            return{
                ...state,
                items:state.items.filter(el=>el.id!==action.payload)

            }
            case COMPLETED_LIST:
                return{
                    ...state,
                    items:state.items.map(el=>el.id===action.payload? {...el, completed:!el.completed}: el)
                }
            case SAVED_LIST:
                return{
                    ...state,
                    saved:action.payload

            }
            case CLEAR_LIST:
                return {
                    saved:null
                }
            default:
                return state;

    }}

    export default ListReducers;
    








    
