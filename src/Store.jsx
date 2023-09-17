import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import coustomerReducer from "./features/coustomers/coustomerSlice";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: accountReducer,
  coustomer: coustomerReducer,
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;

