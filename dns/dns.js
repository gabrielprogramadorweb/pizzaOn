import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
    dsn: "https://<key>@sentry.io/<project>"
});

ReactDOM.render(<App />, document.getElementById("root"));