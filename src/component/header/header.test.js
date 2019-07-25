import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component;
}



describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1);
    });

    it('It should render a Wrap class', () => {
        const wrapper = findByTestAttr(component, 'wrap')
        expect(wrapper.length).toBe(1);
    });
})