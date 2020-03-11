import React from 'react'
import  Itemtodo from './Itemtodo'
import {connect} from 'react-redux'



const ListItem=props=>{
return (
     props.items.items.map(
                     el => <Itemtodo key={el.id}  todo={el} />)


)
}
const mapStateToProps=state=>{
    return{
        items:state.allreducers
    }
    
}
export default connect (mapStateToProps)(ListItem);