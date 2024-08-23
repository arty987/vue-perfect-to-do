export default {
    addTask({commit}, title) {
        commit('addTask', title);
    },
    removeTask({commit}, task) {
        commit('removeTask', task);
    },
    reverseCompleted({commit}, task) {
        commit('reverseCompleted', task);
    },
    setFilter({commit}, filter) {
        commit('setFilter', filter);
    },
    clearCompleted({commit}) {
        commit('clearCompleted');
    }
}