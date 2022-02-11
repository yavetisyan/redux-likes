import { connect } from "react-redux";

const Likes = (props) => {

  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button>Dislike</button>
    </div>
  );
};

function mapStateToProps(state) {

  return {
    likes: state.likes,
  };
}

function mapDispatchToPRops(dispatch) {
  return {
    onIncrementLikes: () => {

      const action = { type: "INCREMENT" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToPRops)(Likes);
