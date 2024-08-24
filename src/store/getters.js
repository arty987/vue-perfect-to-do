export default {
    tasks(state) {
        const tasks = state.tasks;
        const filter = state.filter;
        if (filter === 'Active') {
            return tasks.filter(filter => !filter.completed);
        }
        if (filter === 'Completed') {
            return tasks.filter(filter => filter.completed);
        }
        return tasks;
    },
    activeCount(state) {
        return state.tasks.filter(item => !item.completed).length;
    },
    filter(state) {
        return state.filter;
    }
}