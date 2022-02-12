import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { commentDelete, commentUpdate } from "./actions";

const SingleComment = ({ data }) => {
  const dispatch = useDispatch();
  const { text, id } = data;
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);
  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
		
  };
  return (
    <form className="comments-item" onSubmit={handleUpdate}>
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
