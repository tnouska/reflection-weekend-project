import React, { Component } from "react";
import IconButton from 'material-ui/IconButton';
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux';


class ReflectionListItemDelete extends Component {

render() {
    return (
        <p></p>
    )
}

    
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ReflectionListItemDelete);