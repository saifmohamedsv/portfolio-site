import { combineReducers } from "redux";
import { CHANGE_THEME } from "./actions/type";

export const changeThemeReducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return !state;
        default:
            return state;
    }
};

export default combineReducers({
    changeThemeReducer: changeThemeReducer
});
