import {shallowMount} from '@vue/test-utils'
import TodoFooter from '@/components/molecules/TodoFooter.vue';
import {createStore} from 'vuex';
import {fireEvent, render, screen} from '@testing-library/vue';

describe('TodoFooter.vue', () => {

    const getters = {
        activeCount: () => 3,
        filter: () => 'default'
    };

    let actions;
    let store;

    beforeEach(() => {
        actions = {
            setFilter: jest.fn(),
            clearCompleted: jest.fn()
        };

        store = createStore({
            getters,
            actions
        });
    })

    it('Should render TodoFooter', () => {
        const wrapper = shallowMount(TodoFooter, {
            global: {
                plugins: [store]
            }
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should click Clear completed', async () => {
        render(TodoFooter, {
            global: {
                plugins: [store]
            },
        });

        const button = screen.getByText('Clear completed');

        await fireEvent.click(button);

        expect(actions.clearCompleted).toHaveBeenCalled();
    });

    it.each([
        'All',
        'Active',
        'Completed'
    ])('Should click filter buttons', async (filter) => {
        render(TodoFooter, {
            global: {
                plugins: [store]
            },
        });

        const button = screen.getByText(filter);

        await fireEvent.click(button);

        expect(actions.setFilter).toHaveBeenCalledWith(expect.any(Object), filter);
    });
})