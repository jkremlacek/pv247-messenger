import {
    CHANNEL_LIST_ITEM_SELECT
} from '../../constants/actionTypes';

export const selectedChannelItemId = (prevState = null, action) => {
    switch(action.type) {
        case CHANNEL_LIST_ITEM_SELECT:
            return action.payload.id;
        default:
            return prevState;
    }
};