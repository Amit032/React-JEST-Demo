import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../Utils';

import MyButton from './index';

describe('MyButton component', () => {

    describe('Checking PropTypes', () => {
        it('Should not through a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(MyButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example button Text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<MyButton {...props} />);
        });

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });

});
