export default {
    tasks(state) {
        const tasks = state.tasks;
        const filter = state.filter;
        if (filter === 'active') {
            return tasks.filter(filter => !filter.completed);
        }
        if (filter === 'completed') {
            return tasks.filter(filter => filter.completed);
        }
        return tasks;
    },
    activeCount(state) {
        return state.tasks.filter(item => !item.completed).length;
    }
}