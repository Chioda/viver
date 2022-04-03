import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const estado = {
    token: null,
    usuario: {}
}

export const store = new Vuex.Store({
    state: estado
        
    }
);