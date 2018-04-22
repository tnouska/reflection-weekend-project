import React, { Component } from "react";
import IconButton from 'material-ui/IconButton';
import { Bookmark, BookmarkBorder } from '@material-ui/icons';
import { connect } from 'react-redux';


class ReflectionListItemBookmark extends Component {

    switchBookmark = () => {
        this.props.dispatch({
            type: 'CHANGE_BOOKMARK',
            payload: { id: this.props.reflection.id, bookmarked: this.props.reflection.bookmarked }
        });//end this.props.dispatch to send 'CHANGE_BOOKMARK

    
    }
    render(){
        let bookmark;
        console.log(this.props.reflection);
        
        if (this.props.reflection.bookmarked) {
            bookmark = <Bookmark />
        } else {
            bookmark = <BookmarkBorder />
        }
            return(
            <IconButton onClick={this.switchBookmark}>{bookmark}</IconButton>
        )
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(ReflectionListItemBookmark);