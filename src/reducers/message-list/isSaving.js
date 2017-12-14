import {
    CHANNEL_LIST_SAVING_FINISHED,
    CHANNEL_LIST_SAVING_STARTED,
    CHANNEL_LIST_UPDATE_FINISHED,
    CHANNEL_LIST_UPDATE_STARTED,
    MESSAGE_LIST_SAVING_FINISHED,
    MESSAGE_LIST_SAVING_STARTED,
    MESSAGE_LIST_UPDATE_FINISHED,
    MESSAGE_LIST_UPDATE_STARTED
} from '../../constants/actionTypes';
import {
    FAILED_FETCH_CHANNEL_LIST_MESSAGE, FAILED_FETCH_MESSAGE_LIST_MESSAGE,
    FAILED_FETCH_USER_LIST_MESSAGE
} from '../../constants/uiConstants';

export const isSaving = (prevState = 0, action) => {
    switch (action.type) {
        case CHANNEL_LIST_SAVING_STARTED:
        case CHANNEL_LIST_UPDATE_STARTED:
        case MESSAGE_LIST_UPDATE_STARTED:
        case MESSAGE_LIST_SAVING_STARTED:
            return prevState + 1;

        case CHANNEL_LIST_SAVING_FINISHED:
        case CHANNEL_LIST_UPDATE_FINISHED:
        case FAILED_FETCH_CHANNEL_LIST_MESSAGE:
        case FAILED_FETCH_MESSAGE_LIST_MESSAGE:
        case FAILED_FETCH_USER_LIST_MESSAGE:
        case MESSAGE_LIST_UPDATE_FINISHED:
        case MESSAGE_LIST_SAVING_FINISHED:
            return prevState - 1;

        default:
            return prevState;
    }
};
