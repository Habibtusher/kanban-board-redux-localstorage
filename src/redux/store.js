import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";



const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))
export default store;