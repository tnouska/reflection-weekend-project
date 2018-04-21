import React, { Component } from "react";
import { connect } from 'react-redux';
//enables use of connect to redux

class ReflectionList extends Component{
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_REFLECTION'
        })
    }
    render(){
        return(
            <div>
                <p>
                    test: {JSON.stringify(this.props.reduxState)}
                </p>
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});//allows access to reduxState through props
export default connect(mapStateToProps)(ReflectionList);