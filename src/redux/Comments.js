import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import uniqid from "uniqid";
import { commentCreate, commentsLoad } from "./actions";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const [textComment, setTextComment] = useState("");
  const handleInput = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
