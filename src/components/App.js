import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import countReducer from "../reducers";
import Counter from "./Counter";

const store = createStore(countReducer);

function App(props) {
  const { count } = props;
  return (
    <div id="main">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
