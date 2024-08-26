import getters from "@/store/getters";

describe('getters.js', () => {
    const activeTasks = [
        {
            id: 1,
            title: 'Task 1',
            completed: false
        },
        {
            id: 2,
            title: 'Task 2',
            completed: false
        }
    ];

    const completedTasks = [
        {
            id: 3,
            title: 'Task 3',
            completed: true
        }
    ];

    const tasks = [
        ...activeTasks,
        ...completedTasks
    ];

    it('Should get all tasks', () => {
        const state = {
            tasks,
            filter: 'All'
        };

        expect(getters.tasks(state)).toEqual(tasks);
    });

    it('Should get active tasks', () => {
        const state = {
            tasks,
            filter: 'Active'
        };

        expect(getters.tasks(state)).toEqual(activeTasks);
    });

    it('Should get completed tasks', () => {
        const state = {
            tasks,
            filter: 'Completed'
        };

        expect(getters.tasks(state)).toEqual(completedTasks);
    });

    it('Should get active count', () => {
        const state = {
            tasks
        };

        expect(getters.activeCount(state)).toEqual(2);
    });

    it('Should get filter', () => {
        const state = {
            filter: 'Completed'
        };

        expect(getters.filter(state)).toEqual('Completed');
    });
})
