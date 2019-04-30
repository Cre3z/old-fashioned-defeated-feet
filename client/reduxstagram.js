import React from "react";
import { render } from "react-dom";

// import css
import css from "./styles/style.styl";

// import components
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import react router
import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";
import Raven from "raven-js";
import { sentry_url, logException } from "./data/config";

Raven.config(sentry_url, {
  tags: {
    git_commit: "test",
    userLevel: "editor"
  }
}).install();

// console.log(window.doesNotExist.nope);

// logException(
//   new Error("download failed", {
//     email: "test@gmail.com"
//   })
// );

// Raven.captureMessage("something bad happened");
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
