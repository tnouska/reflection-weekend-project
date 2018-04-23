import React, { Component } from "react";
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux';


class ReflectionListItemDelete extends Component {

deleteReflection = () =>{
    this.props.dispatch({
        type: 'DELETE_REFLECTION',
        payload: this.props.reflection.id
    });//end dispatch to rootSaga
};//end deleteReflection function

render() {
    return (
        <IconButton onClick={this.deleteReflection}><Delete/></IconButton>
    );//end return
};//end render 
};//end ReflectionListItemDelete Class

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ReflectionListItemDelete);