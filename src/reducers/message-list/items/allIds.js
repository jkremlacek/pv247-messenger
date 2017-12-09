import * as Immutable from 'immutable';
import {
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_LIST_ITEM_MOVE,
    MESSAGE_LIST_UPDATE,
} from '../../../constants/actionTypes';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case MESSAGE_LIST_ITEM_CREATE:
            return previousState.push(action.payload.item.id);

        case MESSAGE_LIST_ITEM_DELETE:
            return previousState.filterNot(id => id === action.payload.id);

        case MESSAGE_LIST_ITEM_MOVE: {
            const moveItemIndex = previousState.indexOf(action.payload.moveItemId);
            const destinationItemIndex = previousState.indexOf(action.payload.destinationItemId);

            if ((moveItemIndex < 0) || (destinationItemIndex < 0)) {
                return previousState;
            }

            return previousState.delete(moveItemIndex).insert(destinationItemIndex, action.payload.moveItemId);
        }

        case MESSAGE_LIST_UPDATE:
            return previousState = Immutable.List(Array.from(action.payload.list.keys()));

        default:
            return previousState;
    }
};
