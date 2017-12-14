import * as actionTypes from '../../constants/actionTypes';
import {FAILED_FETCH_USER_LIST_MESSAGE} from '../../constants/uiConstants';

export const loadUsersList = (list) => ({
    type: actionTypes.USERS_LIST_UPDATE,
    payload: {
        list: list,
    }
});

export const startProcessingUserList = () => ({
    type: actionTypes.MESSAGE_LIST_UPDATE_STARTED,
    payload: {}
});

export const endProcessingUserList = () => ({
    type: actionTypes.MESSAGE_LIST_UPDATE_FINISHED,
    payload: {}
});

export const failFetchingUserList = (message, error) => ({
    type: FAILED_FETCH_USER_LIST_MESSAGE,
    payload: {
        message: message,
        error: error,
    }
});