import { FETCH_USERS } from './types';

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            { name: 'Mark' },
            { name: 'Caitlin' },
            { name: 'Tony' },
        ]
    };
}