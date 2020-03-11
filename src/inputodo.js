import React, { Component } from 'react'
import { v1 as uuidv1 } from 'uuid';
import { connect } from 'react-redux'
import { add_list, edit_list, clear } from './actions/actions'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            completed: false
        }
    }

    handleChange = e => {
        this.setState({ item: e.target.value })
    }
    addTodo = () => {
        if(this.props.items.saved){
            this.props.edit(this.state)
            this.setState({ item: '' });
            this.props.clear()
        }else{
            if(this.state.item){
                this.props.add({...this.state, id: uuidv1()})
                this.setState({ item: '' });
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(nextProps.items.saved)
    }
    render() {
        return (
            <div>
                <input value={this.state.item} onChange={this.handleChange} type="text" placeholder="add new todo" />
                <button onClick={this.addTodo}>
                    {this.props.items.saved ? "edit" : "add"} 
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add: newitem=> dispatch( add_list(newitem)),
        edit: todo => dispatch(edit_list(todo)),
        clear: () => dispatch(clear()),
    }
}
const mapStateToProps = state => {
    return{
        items: state.allreducers
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
