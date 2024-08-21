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
    displayAll(state) {
        state.filter = 'all';
    },
    displayCompleted(state) {
        state.filter = 'completed';
    },
    displayActive(state) {
        state.filter = 'active';
    },
    clearCompleted(state) {
        state.tasks = state.tasks.filter(filter => !filter.completed);
    }
}