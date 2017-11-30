import {
    MESSAGE_LIST_ITEM_START_DRAGGING,
    MESSAGE_LIST_ITEM_STOP_DRAGGING
} from '../../constants/actionTypes';

export const isDragging = (prevState = false, action) => {
    switch(action.type) {
        case MESSAGE_LIST_ITEM_START_DRAGGING:
            return true;

        case MESSAGE_LIST_ITEM_STOP_DRAGGING:
            return false;

        default:
            return prevState;
    }
};
