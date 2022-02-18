import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Promotion } from './promotion';
import { Comments } from './comments';
import { Leader } from './leader';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotion: Promotion,
            leader: Leader,
            comments: Comments
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}