import React, { Component } from "react";
import { connect } from 'react-redux';
import ReflectionListItem from './ReflectionListItem/ReflectionListItem'
//enables use of connect to redux

class ReflectionList extends Component{
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_REFLECTION'
        })
    }

    render(){
        let AllPastReflections = this.props.reduxState.pastReflections.map((reflection)=>{
            return <ReflectionListItem key={reflection.id} reflection={reflection} />
        })
        return(
            <div>
                {AllPastReflections}
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});//allows access to reduxState through props
export default connect(mapStateToProps)(ReflectionList);