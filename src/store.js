import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import taskReducer from "./reducers";
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;


// The redux-thunk library allows you to write asynchronous actions, 
// while the redux-devtools-extension library enables you to use the Redux DevTools browser extension to debug and inspect the state and actions in the store.