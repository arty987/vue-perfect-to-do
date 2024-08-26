export default [
    function storeTasksToBrowserStorage(store) {
        store.subscribe((mutation, state) => {
            window.localStorage.setItem("tasks", JSON.stringify(state.tasks))
        })
    }
]