import { shallowMount } from '@vue/test-utils'
import AppButton from '@/components/atoms/AppButton.vue';

describe('AppButton.vue', () => {
    it('Should render AppButton', () => {
        const wrapper = shallowMount(AppButton, {
            slots: {
                default: 'Button',
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });
})
