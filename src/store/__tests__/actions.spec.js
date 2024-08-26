import actions from '@/store/actions';

describe('actions.js', () => {

    const task = {
        id: 1,
        title: 'Task 1',
        completed: true,
    }

    const commit = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should commit addTask mutation', () => {
        actions.addTask({commit}, 'Task description');

        expect(commit).toHaveBeenCalledWith('addTask', 'Task description');
    });

    it('Should commit removeTask mutation', () => {
        actions.removeTask({commit}, task);

        expect(commit).toHaveBeenCalledWith('removeTask', task);
    });

    it('Should commit reverseCompleted mutation', () => {
        actions.reverseCompleted({commit}, task);

        expect(commit).toHaveBeenCalledWith('reverseCompleted', task);
    });

    it('Should commit setFilter mutation', () => {
        actions.setFilter({commit}, 'Completed');

        expect(commit).toHaveBeenCalledWith('setFilter', 'Completed');
    });

    it('Should commit clearCompleted mutation', () => {
        actions.clearCompleted({commit});

        expect(commit).toHaveBeenCalledWith('clearCompleted');
    });
})
