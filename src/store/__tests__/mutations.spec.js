import mutations from '@/store/mutations';

describe('mutations.js', () => {

    let task;
    let state;

    beforeEach(() => {
        task = {
            id: 1,
            title: 'Task 1',
            completed: true
        }

        state = {
            tasks: [task],
            filter: 'All'
        };
    });

    it('Should add a new task', () => {
        const expectedState = {
            tasks: [
                task,
                {
                    id: expect.any(Number),
                    title: 'New task description',
                    completed: false
                }
            ],
            filter: 'All'
        };

        mutations.addTask(state, 'New task description');

        expect(state).toEqual(expectedState);
    });

    it('Should remove a task', () => {
        const expectedState = {
            tasks: [],
            filter: 'All'
        };

        mutations.removeTask(state, task);

        expect(state).toEqual(expectedState);
    });

    it('Should reverse completed value', () => {
        const expectedState = {
            tasks: [
                {
                    ...task,
                    completed: !task.completed
                }
            ],
            filter: 'All'
        };

        mutations.reverseCompleted(state, task);

        expect(state).toEqual(expectedState);
    });

    it('Should set filter', () => {
        const expectedState = {
            ...state,
            filter: 'Completed'
        };

        mutations.setFilter(state, 'Completed');

        expect(state).toEqual(expectedState);
    });

    it('Should remove completed tasks', () => {
        const expectedState = {
            tasks: [],
            filter: 'All'
        };

        mutations.clearCompleted(state);

        expect(state).toEqual(expectedState);
    });
})
