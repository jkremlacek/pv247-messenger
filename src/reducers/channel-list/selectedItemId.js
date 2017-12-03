import {
    CHANNEL_LIST_ITEM_DELETE,
    CHANNEL_LIST_ITEM_SELECT
} from '../../constants/actionTypes';

export const selectedChannelItemId = (prevState = null, action) => {
    switch(action.type) {
        case CHANNEL_LIST_ITEM_SELECT:
            return action.payload.id;
        case CHANNEL_LIST_ITEM_DELETE:

            //TODO: fix unused vars, next lines is a workaround to calm compiler
            if (prevState != null) {
                return null;
            }
            //END

            return null;
        default:
            return null;
    }
};