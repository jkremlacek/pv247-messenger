import {
    CHANNEL_LIST_CLOSE_CREATE_NEW_FORM,
    CHANNEL_LIST_ITEM_CREATE,
    CHANNEL_LIST_OPEN_CREATE_NEW_FORM
} from '../../constants/actionTypes';

export const isCreateNewFormOpen = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_LIST_OPEN_CREATE_NEW_FORM:
            return true;

        case CHANNEL_LIST_ITEM_CREATE:
        case CHANNEL_LIST_CLOSE_CREATE_NEW_FORM:
            return false;

        default:
            return prevState;

    }
};
