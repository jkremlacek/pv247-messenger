import {
    MESSAGE_LIST_ITEM_CANCEL_EDITING,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_LIST_ITEM_START_EDITING,
    MESSAGE_LIST_ITEM_UPDATE
} from '../../constants/actionTypes';

export const editedMessageItemId = (prevState = null, action) => {
    switch(action.type) {
        case MESSAGE_LIST_ITEM_START_EDITING:
            return action.payload.id;

        case MESSAGE_LIST_ITEM_CANCEL_EDITING:
        case MESSAGE_LIST_ITEM_UPDATE:
        case MESSAGE_LIST_ITEM_DELETE:
            return null;
        default:
            return prevState;
    }
};
