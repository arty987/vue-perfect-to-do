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
    displayAll({commit}) {
        commit('displayAll');
    },
    displayCompleted({commit}) {
        commit('displayCompleted');
    },
    displayActive({commit}) {
        commit('displayActive');
    },
    clearCompleted({commit}) {
        commit('clearCompleted');
    }
}