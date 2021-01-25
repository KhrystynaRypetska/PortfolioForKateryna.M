import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        items: [],
        page: [],
        information: [],
    },
    mutations: {
        SET_ITEMS_TO_STATE:(state, items) => {
            state.items = items;
        },
        SET_PAGE: (state, page) => {
            state.page.push(page)
        },
        SET_INFO_TO_STATE: (state, information) => {
            state.information = information;
        }
    },

    actions: {
        GET_ITEMS_FROM_API({commit}){
            return axios(' http://localhost:3000/items', {
                method: "GET"
            })
                .then((items) =>{
                    commit('SET_ITEMS_TO_STATE', items.data);
                    return items;
            })
                .catch((error) => {
                console.log(error)
                    return error;
            })
        },

        ADD_TO_PAGE({commit}, page) {
            commit('SET_PAGE', page);
        },

        GET_INFO_FROM_API({commit}){
            return axios('  http://localhost:3000/info', {
                method: "GET"
            })
                .then((information) => {
                    commit('SET_INFO_TO_STATE', information.data);
                    return information;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        }
    },

    getters: {
        ITEMS(state) {
            return state.items;
        },

        PAGE(state) {
            return state.page;
        },

        INFO(state) {
            return state.information;
        }

    }
});

export default store;