import {shallowMount} from '@vue/test-utils'
import AppCheckbox from '@/components/atoms/AppCheckbox.vue';

describe('AppCheckbox.vue', () => {

    const wrapper = shallowMount(AppCheckbox);

    it('Should render AppCheckbox with default props', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should render AppCheckbox with props set', async () => {
        await wrapper.setProps({
            disabled: true,
            checked: true
        });

        expect(wrapper.element).toMatchSnapshot();
    });
})
