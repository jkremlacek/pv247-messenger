import * as Immutable from 'immutable';
import {
    CHANNEL_LIST_ITEM_CREATE,
    CHANNEL_LIST_ITEM_DELETE,
    CHANNEL_LIST_ITEM_MOVE, CHANNEL_LIST_UPDATE,
} from '../../../constants/actionTypes';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case CHANNEL_LIST_ITEM_CREATE:
            return previousState.push(action.payload.item.id);

        case CHANNEL_LIST_ITEM_DELETE:
            return previousState.filterNot(id => id === action.payload.id);

        case CHANNEL_LIST_ITEM_MOVE: {
            const moveItemIndex = previousState.indexOf(action.payload.moveItemId);
            const destinationItemIndex = previousState.indexOf(action.payload.destinationItemId);

            if ((moveItemIndex < 0) || (destinationItemIndex < 0)) {
                return previousState;
            }

            return previousState.delete(moveItemIndex).insert(destinationItemIndex, action.payload.moveItemId);
        }

        case CHANNEL_LIST_UPDATE:
            //because async
            if (typeof action.payload.list === 'undefined') {
                return previousState;
            } else {
                return previousState = Immutable.List(Array.from(action.payload.list.keys()));
            }

        default:
            return previousState;
    }
};
