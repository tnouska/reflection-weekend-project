import React, { Component } from "react";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import BookmarkButton from './ReflectionListItemBookmark/ReflectionListItemBookmark';
import DeleteButton from './ReflectionListItemDelete/ReflectionListItemDelete'
import moment from 'moment'


class ReflectionListItem extends Component {
    switchBookmark = () =>{
        this.props.dispatch({
            type: 'CHANGE_BOOKMARK',
            payload: {id: this.props.reflection.id, newBookmark: !this.props.reflection.bookmarked}
        });//end dispatch to rootSaga
    };//end switchBookmark function


    render() {
        let time = moment(this.props.reflection.date).format('l')
        return(
            <div>
                <Card className='card'>
                    <CardContent>
                        <Typography className='title'>
                            {this.props.reflection.topic}
                        </Typography>
                        <Typography className='date'>
                            Added on: {time}
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
        );// end return
    };//end render
};//end ReflectionListItem class

export default ReflectionListItem