import {createStore} from 'vuex'
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

const defaultState = {
    tasks: [],
    filter: 'all'
}

export default createStore({
    state: defaultState,
    getters,
    actions,
    mutations
})