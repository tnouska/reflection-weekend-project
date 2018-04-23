import React, { Component } from "react";
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'

class ReflectionForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic: '',
            description: ''
        };//end default state
    };//end constructor

handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });//end setState to save form inputs temporailly 
};//end handleInputChange to run on change of Topic and Description inputs.

handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
        type: 'POST_REFLECTION',
        payload: this.state
    });//end dispatch method to send POST_REFLECTION TO rootSaga with ReflectionForm State
};//end handleSubmit function


render(){
    return(
        <Paper>
            <form onSubmit={this.handleSubmit}>
                <Typography>Topic</Typography>
                <input className='topicInput' name="topic"  onChange={this.handleInputChange}></input>
                <Typography>Reflection</Typography>
                <input className='descriptionInput' name="description"  onChange={this.handleInputChange}></input>
                <br/>
                <Button type='submit' value='Submit'>Submit</Button>
            </form>
        </Paper>

    )
}

};//end ReflectionForm Class

const mapStateToProps = reduxState => ({
    reduxState,
});//allows access to reduxState through props
export default connect(mapStateToProps)(ReflectionForm);