import React from "react";
import { decrementCount, incrementCount } from "../actions/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount),
    decrementCount: () => dispatch(decrementCount),
  };
};

function Counter(props) {
  const { count, increaseCount, decreaseCount } = props;
  return (
    <>
      <div data-testid="counter">{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
