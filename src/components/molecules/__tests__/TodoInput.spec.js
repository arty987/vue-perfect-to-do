import {shallowMount} from '@vue/test-utils'
import TodoInput from "@/components/molecules/TodoInput.vue";
import {createStore} from "vuex";
import AppInput from "@/components/atoms/AppInput.vue";

describe('TodoInput.vue', () => {

    let actions;
    let store;

    beforeEach(() => {
        actions = {
            addTask: jest.fn()
        };

        store = createStore({
            actions
        });
    });

    it('Should render TodoInput', () => {
        const wrapper = shallowMount(TodoInput);
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should add new task on enter', async () => {
        const wrapper = shallowMount(TodoInput, {
            global: {
                plugins: [store]
            }
        });

        const input = wrapper.findComponent(AppInput);

        await input.setValue('new task');
        await input.trigger('enter');

        expect(actions.addTask).toHaveBeenCalledWith(expect.any(Object), 'new task');
        expect(input.props().modelValue).toBe('');
    });

    it('Should clear input field on esc', async () => {
        const wrapper = shallowMount(TodoInput, {
            global: {
                plugins: [store]
            }
        });

        const input = wrapper.findComponent(AppInput);

        await input.setValue('new task');
        await input.trigger('esc');

        expect(actions.addTask).not.toHaveBeenCalled();
        expect(input.props().modelValue).toBe('');
    });
})