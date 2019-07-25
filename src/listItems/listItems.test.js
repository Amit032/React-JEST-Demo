import React from 'react'
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../Utils'
import ListItems from './index';

describe('ListItem component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Text'
            };
            const propsError = checkProps(ListItems, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Text'
            };
            wrapper = shallow(<ListItems {...props} />);
        });

        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })

        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Text'
            };
            wrapper = shallow(<ListItems {...props} />);
        });

        it('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    })
})
