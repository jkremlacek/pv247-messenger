import {
    CHANNEL_LIST_ITEM_START_DRAGGING,
    CHANNEL_LIST_ITEM_STOP_DRAGGING
} from '../../constants/actionTypes';

export const isDragging = (prevState = false, action) => {
    switch(action.type) {
        case CHANNEL_LIST_ITEM_START_DRAGGING:
            return true;

        case CHANNEL_LIST_ITEM_STOP_DRAGGING:
            return false;

        default:
            return prevState;
    }
};
