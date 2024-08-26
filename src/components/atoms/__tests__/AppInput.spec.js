import {shallowMount} from '@vue/test-utils'
import AppInput from '@/components/atoms/AppInput.vue';

describe('AppInput.vue', () => {
    it('Should render AppInput', () => {
        const wrapper = shallowMount(AppInput, {
            props: {
                modelValue: 'some input value',
                placeholder: 'some placeholder',
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Should emit enter event', () => {
        const wrapper = shallowMount(AppInput, {
            props: {
                modelValue: 'some input value',
                placeholder: 'some placeholder',
            }
        });

        wrapper.find('input').trigger('keyup.enter');

        expect(wrapper.emitted()).toHaveProperty('enter');
    });

    it('Should emit esc event', () => {
        const wrapper = shallowMount(AppInput, {
            props: {
                modelValue: 'some input value',
                placeholder: 'some placeholder',
            }
        });

        wrapper.find('input').trigger('keyup.esc');

        expect(wrapper.emitted()).toHaveProperty('esc');
    });

    it('Should emit update:modelValue event with input value', () => {
        const wrapper = shallowMount(AppInput, {
            props: {
                modelValue: 'some input value',
                placeholder: 'some placeholder',
            }
        });

        wrapper.find('input').trigger('input');

        const updateModelValueEvent = wrapper.emitted('update:modelValue');

        expect(updateModelValueEvent[0]).toEqual(['some input value']);
    });
})
