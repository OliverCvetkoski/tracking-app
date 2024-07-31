import { combineReducers } from "@reduxjs/toolkit";
import getOrder from "./getOrder";

const rootReducer = combineReducers({
  getOrderProgress: getOrder,
});

export default rootReducer;
