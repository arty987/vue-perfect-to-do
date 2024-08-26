import {shallowMount} from '@vue/test-utils'
import AppCheckbox from '@/components/atoms/AppCheckbox.vue';

describe('AppCheckbox.vue', () => {
    it('Should render AppCheckbox with default props', () => {
        const wrapper = shallowMount(AppCheckbox);
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should render AppCheckbox with props set', () => {
        const wrapper = shallowMount(AppCheckbox, {
            props: {
                disabled: true,
                checked: true
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });
})
