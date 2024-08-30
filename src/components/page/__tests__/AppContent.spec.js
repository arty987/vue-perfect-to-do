import {shallowMount} from '@vue/test-utils'
import AppContent from "@/components/page/AppContent.vue";

describe('AppContent.vue', () => {
    it('Should render AppContent', () => {
        const wrapper = shallowMount(AppContent);
        expect(wrapper.element).toMatchSnapshot();
    });
})