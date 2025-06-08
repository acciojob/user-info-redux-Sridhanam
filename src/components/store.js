import {createStore} from "redux";
import Reducer from "./reducers";
import React from "react";

const store = createStore(Reducer);
export default store;
