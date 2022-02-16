import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Promotion } from './promotion';
import { Comments } from './comments';
import { Leader } from './leader';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotion: Promotion,
            leader: Leader,
            comments: Comments
        })
    );

    return store;
}