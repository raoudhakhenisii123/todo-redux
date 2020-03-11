import {ADD_LIST,EDIT_LIST, DELETE_LIST, SAVED_LIST, COMPLETED_LIST, CLEAR_LIST} from './types'


export const add_list=newitem=>{

return{
    type:ADD_LIST,
    payload:newitem
}
}

export const edit_list= todo=>{

    return{
        type:EDIT_LIST,
        payload:todo
    }
    }

    export const delete_list=id=>{

        return{
            type:DELETE_LIST,
            payload:id
        }
        }
    export const completed_list=id=>{

         return{
              type:COMPLETED_LIST,
             payload:id
            }
            }


    export const save_list=todo=>{
        return{
        type:SAVED_LIST,
        payload:todo
        }
    }
    export const clear=()=>{
        return {
            type:CLEAR_LIST
        }
    }