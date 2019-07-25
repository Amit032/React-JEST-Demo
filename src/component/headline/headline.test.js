import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index'

import { findByTestAttr, checkProps } from '../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    age: 24,
                    onlineStatus: false,
                }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have Props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            };
            wrapper = setUp(props);
        });

        it('It should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1);
        })

        it('It should render H1', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1);
        })

        it('It should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1);
        })

    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })
}) 