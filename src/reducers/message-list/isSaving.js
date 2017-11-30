import {
    MESSAGE_LIST_SAVING_FINISHED,
    MESSAGE_LIST_SAVING_STARTED
} from '../../constants/actionTypes';

export const isSaving = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGE_LIST_SAVING_STARTED:
            return true;

        case MESSAGE_LIST_SAVING_FINISHED:
            return false;

        default:
            return prevState;
    }
};
