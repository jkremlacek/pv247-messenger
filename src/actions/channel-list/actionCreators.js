import { uuid } from '../../utils/uuidGenerator';
import * as actionTypes from '../../constants/actionTypes';
import {FAILED_FETCH_CHANNEL_LIST_MESSAGE} from '../../constants/uiConstants';

export const createNewItem = (newItem) => ({
    type: actionTypes.CHANNEL_LIST_ITEM_CREATE,
    payload: {
        item: {
            ...newItem,
            // note that we have an explicit dependency and will refactor this
            // to use dependency injection in following commits
            id: uuid(),
        },
    }
});

export const updateItem = (item) => ({
    type: actionTypes.CHANNEL_LIST_ITEM_UPDATE,
    payload: {
        item,
    }
});

export const deleteItem = (id) => ({
    type: actionTypes.CHANNEL_LIST_ITEM_DELETE,
    payload: {
        id,
    }
});

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

export const updateChannelList = (list) => ({
    type: actionTypes.CHANNEL_LIST_UPDATE,
    payload: {
        list,
    }
});

export const startFetchingChannelList = () => ({
    type: actionTypes.CHANNEL_LIST_UPDATE_START,
    payload: {

    }
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