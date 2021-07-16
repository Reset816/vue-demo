import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
    loading: false,
    token: null,
    title: ''
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;