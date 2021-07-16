import {
    LOADING,
    LOGIN,
    LOGOUT,
    TITLE
} from "./mutation-types";
export default {
    [LOADING]: (state, showFlag) => {
        state.loading = showFlag;
    },
    [LOGIN]: (state, token) => {
        state.token = token;
    },
    [LOGOUT]: state => {
        state.token = null;
    },
    [TITLE]: (state, title) => {
        state.token = title;
    }
};