import {shallowMount} from '@vue/test-utils'
import TodoHeader from '@/components/molecules/TodoHeader.vue';

describe('TodoHeader.vue', () => {
    it('Should render TodoHeader', () => {
        const wrapper = shallowMount(TodoHeader);
        expect(wrapper.element).toMatchSnapshot();
    });
})