import * as Immutable from 'immutable';
import {
    CHANNEL_LIST_ITEM_CREATE,
    CHANNEL_LIST_ITEM_DELETE,
    CHANNEL_LIST_ITEM_INVITE_USER,
    CHANNEL_LIST_ITEM_UPDATE, CHANNEL_LIST_UPDATE,
} from '../../../constants/actionTypes';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_CREATE:
            return previousState.set(action.payload.item.id, { ...action.payload.item });

        case CHANNEL_LIST_ITEM_UPDATE:
            return previousState.mergeIn([action.payload.item.id], { ...action.payload.item });

        case CHANNEL_LIST_ITEM_INVITE_USER:
            action.payload.item.members = Immutable.Set([...action.payload.item.members, action.payload.id]);
            return previousState.mergeIn([action.payload.item.id], { ...action.payload.item });

        case CHANNEL_LIST_ITEM_DELETE:
            return previousState.delete(action.payload.id);

        case CHANNEL_LIST_UPDATE:
            return previousState = action.payload.list;

        default:
            return previousState;
    }
};
