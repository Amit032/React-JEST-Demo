import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../src/reducers'
import { middleWares } from '../createStore';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const crateStoreWithMiddleware = applyMiddleware(...middleWares)(createStore)
    return crateStoreWithMiddleware(rootReducer, initialState);
}