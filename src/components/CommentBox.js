import React from 'react';

const CommentBox = ({ postId, addComment }) => {

    return (
        <div className="container">
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputComment" className="sr-only">Comment</label>
                    <input type="text" className="form-control" id="inputComment" placeholder="Comment" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    );
}


export default CommentBox;