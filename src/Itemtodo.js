import React from 'react'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux'
import {delete_list, completed_list, save_list } from './actions/actions.js'
const Itemtodo = props => {
    return (
        <div>
            <input onClick={() => props.complete(props.todo.id)} id={props.todo.id} type="checkbox" />
            <label style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}} htmlFor={props.todo.id}>{props.todo.item}</label>
            <button onClick={() => props.delete(props.todo.id)}>
                <span className="mx-2 text-danger">
                    <i className="fa fa-trash"></i>
                 </span></button>
            <button onClick={() => props.save(props.todo)}>
                <span className="mx-2 text-success">
                    <i className="fa fa-pencil"></i>
                 </span></button>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        delete: id => dispatch(delete_list(id)),
        complete: id => dispatch(completed_list(id)),
        save: todo => dispatch(save_list(todo))
    }
}
export default connect(null, mapDispatchToProps)(Itemtodo)

