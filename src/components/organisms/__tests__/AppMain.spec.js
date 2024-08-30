import {shallowMount} from '@vue/test-utils'
import AppMain from "@/components/organisms/AppMain.vue";

describe('AppMain.vue', () => {
    it('Should render AppMain', () => {
        const wrapper = shallowMount(AppMain);
        expect(wrapper.element).toMatchSnapshot();
    });
})