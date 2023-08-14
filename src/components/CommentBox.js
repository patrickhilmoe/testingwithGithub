import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from './requireAuth';
// import { useHistory } from 'react-router-dom';

 class CommentBox extends Component {
    state = {comment: ''};

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        //prevents something from happening with the submit
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </>
        );
    }
}

export default connect(null, actions) (requireAuth(CommentBox));