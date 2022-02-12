import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

const Title = (props) => {
  const dispatch = useDispatch();
  const title = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };
  return (
    <div className="cart-title">
      <div className="card-title-top">
        <input type="text" placeholder="Enter value" onChange={handleChange} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Title;
