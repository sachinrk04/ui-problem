import React, { useState } from "react";
import Button from "../Button/Button";
import { Comment } from "../../../Containers/TodoComment/DataFormat/inputData";
import "./CommentBox.scss";

const commentBox = "comment-box";

export default function CommentBox({ onSetComments, submitType, editData }) {
  const [addComment, setAddComment] = useState(
    submitType === "edit" ? editData.comment : ""
  );

  const onChangeComment = (e) => {
    if (e.key === "Enter" && addComment.length > 0) {
      onAddComment();
    } else {
      const { value } = e.target;
      setAddComment(value);
    }
  };

  const onAddComment = () => {
    if (submitType === "create") {
      const comentId = "COMMENT-" + new Date().getTime();
      const commentTime = new Date();
      const newComment = new Comment(comentId, addComment, [], commentTime);
      onSetComments((oldComment) => [...oldComment, newComment]);
      setAddComment("");
    } else if (submitType === "reply") {
      const replyId = "REPLY-" + new Date().getTime();
      const replyTime = new Date();
      const replyComment = new Comment(replyId, addComment, [], replyTime);
      onSetComments(replyComment);
      setAddComment("");
    } else {
      editData.comment = addComment;
      onSetComments(editData);
      setAddComment("");
    }
  };
  return (
    <div className={`${commentBox}-container`}>
      {submitType === "create" ? (
        <div className={`${commentBox}-label`}>
          <label>Add Comment</label>
        </div>
      ) : null}
      <div className={`${commentBox}-input`}>
        <input
          className={`${submitType === "create" ? "input-comment" : null}`}
          type="text"
          name="addComment"
          placeholder={
            submitType === "create" ? "Enter a comment" : "Enter your reply"
          }
          value={addComment}
          onChange={(e) => onChangeComment(e)}
          onKeyUp={(e) => onChangeComment(e)}
          autoFocus={submitType === "create" ? false : true}
        />
        {(submitType === "reply" || submitType === "edit") &&
        addComment.length ? (
          <Button
            type={"button"}
            children={submitType === "reply" ? "Reply" : "Update"}
            onClick={onAddComment}
            className={"add-reply"}
            disabled={!addComment.length}
          />
        ) : submitType === "create" ? (
          <Button
            type={"button"}
            children={"ADD COMMENT"}
            onClick={onAddComment}
            className={"add-button"}
            disabled={!addComment.length}
          />
        ) : null}
      </div>
    </div>
  );
}
