import { FETCH_USERS } from '../actions/types';

export default function({ dispatch }) {
    return next => action => {
        // if action has a promise in it, resolve it then dispatch the new action with the new payload
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        
        action.payload.then((result) => {
            dispatch({ ...action, payload: result });
        });
    };
}