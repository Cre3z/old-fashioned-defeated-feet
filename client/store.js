import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-redux-router";
import { browserHistory } from "react-router";

// import the route reducer
import rootReducer from "./reducers/index";

// import data
import comments from "./data/comments";
import posts from "./data/posts";

// create an obejct for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const histroy = syncHistoryWithStore(browserHistory, store);

export default store;
