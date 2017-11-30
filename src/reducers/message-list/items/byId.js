import * as Immutable from 'immutable';
import {
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_LIST_ITEM_UPDATE
} from '../../../constants/actionTypes';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case MESSAGE_LIST_ITEM_CREATE:
            return previousState.set(action.payload.item.id, { ...action.payload.item });

        case MESSAGE_LIST_ITEM_UPDATE:
            return previousState.mergeIn([action.payload.item.id], { ...action.payload.item });

        case MESSAGE_LIST_ITEM_DELETE:
            return previousState.delete(action.payload.id);

        default:
            return previousState;
    }
};
