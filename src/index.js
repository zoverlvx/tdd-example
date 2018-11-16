import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {Provider} from "react-redux";
import App from "./components/app";
import "./index.css"; 
const mount = document.getElementById("root");

const store = createStore(rootReducer, applyMiddleware(thunk));


render(
    <Provider store={store}>
        <App />
    </Provider>, 
    mount);
