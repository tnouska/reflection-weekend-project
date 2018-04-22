import React, { Component } from "react";
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux';


class ReflectionListItemDelete extends Component {

deleteReflection = () =>{
    this.props.dispatch({
        type: 'DELETE_REFLECTION',
        payload: this.props.reflection.id
    })
} 

render() {
    return (
        <IconButton onClick={this.deleteReflection}><Delete/></IconButton>
    )
}

    
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ReflectionListItemDelete);