import * as actionTypes from '../../constants/actionTypes';
import {FAILED_FETCH_CHANNEL_LIST_MESSAGE} from '../../constants/uiConstants';

export const selectItem = (id) => ({
    type: actionTypes.CHANNEL_LIST_ITEM_SELECT,
    payload: {
        id,
    }
});

export const startEditingItem = (id) => ({
    type: actionTypes.CHANNEL_LIST_ITEM_START_EDITING,
    payload: {
        id,
    }
});

export const inviteUser = (item, id) => ({
    type: actionTypes.CHANNEL_LIST_ITEM_INVITE_USER,
    payload: {
        item,
        id
    }
});

export const updateLocalChannelList = (list) => ({
    type: actionTypes.CHANNEL_LIST_UPDATE,
    payload: {
        list,
    }
});

export const startProcessingChannelList = () => ({
    type: actionTypes.CHANNEL_LIST_UPDATE_STARTED,
    payload: {}
});

export const endProcessingChannelList = () => ({
    type: actionTypes.CHANNEL_LIST_UPDATE_FINISHED,
    payload: {}
});

export const failFetchingChannelList = (message, error) => ({
    type: FAILED_FETCH_CHANNEL_LIST_MESSAGE,
    payload: {
        message: message,
        error: error,
    }
});

export const cancelEditingItem = () => ({
    type: actionTypes.CHANNEL_LIST_ITEM_CANCEL_EDITING,
});

export const openCreateNewForm = () => ({
    type: actionTypes.CHANNEL_LIST_OPEN_CREATE_NEW_FORM,
});

export const closeCreateNewForm = () => ({
    type: actionTypes.CHANNEL_LIST_CLOSE_CREATE_NEW_FORM,
});

export const savingStarted = () => ({
    type: actionTypes.CHANNEL_LIST_SAVING_STARTED,
});

export const savingFinished = () => ({
    type: actionTypes.CHANNEL_LIST_SAVING_FINISHED,
});