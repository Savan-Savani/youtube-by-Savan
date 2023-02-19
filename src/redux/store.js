import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const intaialState = {
  name: "Savan",
  age: 23,
};
const reducer = (intaialState) => intaialState;

const store = createStore(
  reducer,
  intaialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;