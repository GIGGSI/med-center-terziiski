import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import ReduxThunk from 'redux-thunk'
import rootReducer from "./rootReducer";

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(ReduxThunk))
