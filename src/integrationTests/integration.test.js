import moxios from 'moxios';
import { testStore } from '../Utils/index';
import { fetchPosts } from '../actions/index';

describe('FetchPost action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Example title 1',
            body: 'Text'
        }, {
            title: 'Example title 2',
            body: 'Text'
        }, {
            title: 'Example title 3',
            body: 'Text'
        }, {
            title: 'Example title 4',
            body: 'Text'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });
        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    })
})
