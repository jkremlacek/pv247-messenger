import {
    CHANNEL_LIST_ITEM_CANCEL_EDITING,
    CHANNEL_LIST_ITEM_DELETE,
    CHANNEL_LIST_ITEM_START_EDITING,
    CHANNEL_LIST_ITEM_UPDATE
} from '../../constants/actionTypes';

export const editedChannelItemId = (prevState = null, action) => {
    switch(action.type) {
        case CHANNEL_LIST_ITEM_START_EDITING:
            return action.payload.id;

        case CHANNEL_LIST_ITEM_CANCEL_EDITING:
        case CHANNEL_LIST_ITEM_UPDATE:
        case CHANNEL_LIST_ITEM_DELETE:
            return null;
        default:
            return prevState;
    }
};
