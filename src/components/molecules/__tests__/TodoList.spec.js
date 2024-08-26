import {mount} from '@vue/test-utils'
import TodoList from '@/components/molecules/TodoList.vue';
import {createStore} from "vuex";

describe('TodoList.vue', () => {

    it.each([
            [[]],
            [[
                {
                    id: 1,
                    title: 'Task 1',
                    completed: true,
                },
                {
                    id: 2,
                    title: 'Task 2',
                    completed: false,
                },
                {
                    id: 3,
                    title: 'Task 3',
                    completed: false,
                }
            ]]
        ]
    )('Should render TodoList', (tasks) => {
        const store = createStore({
            getters: {
                tasks: () => tasks
            }
        });

        const wrapper = mount(TodoList, {
            global: {
                plugins: [store]
            }
        });

        expect(wrapper.element).toMatchSnapshot();
    });
})