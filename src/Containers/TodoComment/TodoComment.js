import React, { useState } from 'react';
import "./TodoComment.scss";
import CommentBox from '../../Components/TodoCommentComponents/CommentBox/CommentBox';
import { CommentsLists } from './DataFormat/commentsData';
import { data } from './DataFormat/data';
import CommentView from '../../Components/TodoCommentComponents/CommentView/CommentView';

function TodoComment() {
    const lists = new CommentsLists(data);
    const [comments, setComments] = useState(lists.comments);

    return (
        <div className="commnets-container">
            <CommentBox onSetComments={setComments} submitType="create" />
            {comments && comments.length ? (
                <CommentView comments={comments} onSetComments={setComments} /> 
            ) : (
                "No Comment"
            )}
        </div>
    )
};

export default TodoComment;
