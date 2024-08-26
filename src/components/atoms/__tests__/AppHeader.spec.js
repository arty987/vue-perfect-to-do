import {shallowMount} from '@vue/test-utils'
import AppHeader from '@/components/atoms/AppHeader.vue';

describe('AppHeader.vue', () => {
    it('Should render AppHeader', () => {
        const wrapper = shallowMount(AppHeader);
        expect(wrapper.element).toMatchSnapshot();
    });
})
