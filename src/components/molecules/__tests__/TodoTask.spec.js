import {shallowMount} from '@vue/test-utils'
import TodoTask from '@/components/molecules/TodoTask.vue';
import AppCheckbox from '@/components/atoms/AppCheckbox.vue';
import {createStore} from 'vuex';
import AppButton from '@/components/atoms/AppButton.vue';

describe('TodoTask.vue', () => {

    const task = {
        id: 1,
        title: 'Task 1',
        completed: true
    };

    let actions;
    let store;

    beforeEach(() => {
        actions = {
            removeTask: jest.fn(),
            reverseCompleted: jest.fn()
        };

        store = createStore({
            actions
        });
    })

    it.each([
        true, false
    ])('Should render TodoTask', (completed) => {
        const wrapper = shallowMount(TodoTask, {
            props: {
                task: {
                    ...task,
                    completed
                }
            }
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should dispatch reverseCompleted action on AppCheckbox change', async () => {
        const wrapper = shallowMount(TodoTask, {
            props: {
                task
            },
            global: {
                plugins: [store]
            }
        });

        await wrapper.findComponent(AppCheckbox).trigger('change');

        expect(actions.reverseCompleted).toHaveBeenCalledWith(expect.any(Object), task);
    });

    it('Should dispatch removeTask action on AppButton click', async () => {
        const wrapper = shallowMount(TodoTask, {
            props: {
                task
            },
            global: {
                plugins: [store]
            }
        });

        await wrapper.findComponent(AppButton).trigger('click');

        expect(actions.removeTask).toHaveBeenCalledWith(expect.any(Object), task);
    });
})