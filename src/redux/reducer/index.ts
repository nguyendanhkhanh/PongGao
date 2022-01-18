import { combineReducers } from "redux";
import { Auth } from "../action/auth";
import auth, { initialToken } from "./auth"
export interface RootState {
    auth: Auth;
}

export const initialState: RootState = {
    auth: initialToken,
}

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;