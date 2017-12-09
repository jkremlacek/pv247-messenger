import * as Immutable from 'immutable';
import {USERS_LIST_UPDATE} from '../../constants/actionTypes';

export const users = (prevState = Immutable.List(), action) => {
    switch (action.type) {
        case USERS_LIST_UPDATE:
            return prevState = action.payload.list;
        default:
            return prevState;
    }
};