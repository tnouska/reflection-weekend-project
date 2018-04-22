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
        topic: event.target.topic,
        description: event.target.description
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
        type: 'POST_REFLECTION',
        payload: this.state
    })
}


render(){
    return(
        <Paper>
            <form onSubmit={this.handleSubmit}>
                <Typography>Topic</Typography>
                <input name="topic"  onChange={this.handleInputChange}></input>
                <Typography>Reflection</Typography>
                <textarea name="description"  onChange={this.handleInputChange}></textarea>
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