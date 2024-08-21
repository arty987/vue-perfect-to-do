import {createStore} from 'vuex'
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import plugins from "@/store/plugins";

const defaultState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'all'
}

export default createStore({
    state: defaultState,
    getters,
    actions,
    mutations,
    plugins
})