import React, { Component } from "react";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import BookmarkButton from './ReflectionListItemBookmark/ReflectionListItemBookmark';
import DeleteButton from './ReflectionListItemDelete/ReflectionListItemDelete'

class ReflectionListItem extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //     }
    // }
    switchBookmark = () =>{
        
        this.props.dispatch({
            type: 'CHANGE_BOOKMARK',
            payload: {id: this.props.reflection.id, newBookmark: !this.props.reflection.bookmarked}
        })
        
    }
    render() {
        
        return(
            <div>
                <Card className='card'>
                    <CardContent>
                        <Typography className='title'>
                            {this.props.reflection.topic}
                        </Typography>
                        <Typography className='date'>
                            Added on: {this.props.reflection.date}
                        </Typography>
                        <Typography>
                            {this.props.reflection.description}
                        </Typography>
                    </CardContent>
                    <CardActions> 
                        <BookmarkButton reflection={this.props.reflection}/>
                        <DeleteButton reflection={this.props.reflection}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default ReflectionListItem