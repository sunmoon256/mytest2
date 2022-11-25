import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    _defaultView: '123456',
};
const getters = {
    _getDefaultView() {
        return state._defaultView;
    },
};
const mutations = {
    _setDefaultView(state, view) {
        state._defaultView = view;
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
});

export default store;
