import React, { Component } from "react";
import { connect } from 'react-redux';
import ReflectionListItem from './ReflectionListItem/ReflectionListItem'
//enables use of connect to redux

class ReflectionList extends Component{
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_REFLECTION'
        });//end dispatch to rootSaga
    };//end componentDidMount

    render(){
        let AllPastReflections = this.props.reduxState.pastReflections.map((reflection)=>{
            return <ReflectionListItem key={reflection.id} reflection={reflection} />
        });//end map over pastReflections
        return(
            <div>
                {AllPastReflections}
            </div>
        );//end return
    };//end render
};//end ReflectionList Class


const mapStateToProps = reduxState => ({
    reduxState,
});//allows access to reduxState through props
export default connect(mapStateToProps)(ReflectionList);