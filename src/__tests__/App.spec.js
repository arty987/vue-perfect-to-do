import {shallowMount} from '@vue/test-utils'
import App from "@/App.vue";

describe('App.vue', () => {
    it('Should render App', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.element).toMatchSnapshot();
    });
})