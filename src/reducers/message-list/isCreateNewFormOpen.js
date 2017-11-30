import {
    MESSAGE_LIST_CLOSE_CREATE_NEW_FORM,
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_LIST_OPEN_CREATE_NEW_FORM
} from '../../constants/actionTypes';

export const isCreateNewFormOpen = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGE_LIST_OPEN_CREATE_NEW_FORM:
            return true;

        case MESSAGE_LIST_ITEM_CREATE:
        case MESSAGE_LIST_CLOSE_CREATE_NEW_FORM:
            return false;

        default:
            return prevState;

    }
};
