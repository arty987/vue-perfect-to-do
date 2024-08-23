export default {
    addTask(state, title) {
        state.tasks.push({
            id: Date.now(),
            title,
            completed: false
        });
    },
    removeTask(state, task) {
        const tasks = state.tasks;
        const removeIndex = tasks.indexOf(task);
        tasks.splice(removeIndex, 1);
    },
    reverseCompleted(state, task) {
        const tasks = state.tasks;
        tasks[tasks.indexOf(task)] = {
            ...task,
            completed: !task.completed
        }
    },
    setFilter(state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.tasks = state.tasks.filter(filter => !filter.completed);
    }
}