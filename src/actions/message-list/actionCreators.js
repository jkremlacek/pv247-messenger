import * as actionTypes from '../../constants/actionTypes';
import {FAILED_FETCH_MESSAGE_LIST_MESSAGE} from '../../constants/uiConstants';

export const updateItem = (item) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_UPDATE,
    payload: {
        item,
    }
});

export const deleteItem = (id) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_DELETE,
    payload: {
        id,
    }
});

export const upVoteItem = (item, id) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_UPVOTE,
    payload: {
        item,
        id
    }
});

export const downVoteItem = (item, id) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_DOWNVOTE,
    payload: {
        item,
        id
    }
});

export const updateLocalMessageList = (list) => ({
    type: actionTypes.MESSAGE_LIST_UPDATE,
    payload: {
        list,
    }
});

export const startProcessingMessageList = () => ({
    type: actionTypes.MESSAGE_LIST_UPDATE_STARTED,
    payload: {}
});

export const endProcessingMessageList = () => ({
    type: actionTypes.MESSAGE_LIST_UPDATE_FINISHED,
    payload: {}
});

export const failFetchingMessageList = (message, error) => ({
    type: FAILED_FETCH_MESSAGE_LIST_MESSAGE,
    payload: {
        message: message,
        error: error,
    }
});

export const cancelEditingItem = () => ({
    type: actionTypes.MESSAGE_LIST_ITEM_CANCEL_EDITING,
});

export const openCreateNewForm = () => ({
    type: actionTypes.MESSAGE_LIST_OPEN_CREATE_NEW_FORM,
});

export const closeCreateNewForm = () => ({
    type: actionTypes.MESSAGE_LIST_CLOSE_CREATE_NEW_FORM,
});

export const savingStarted = () => ({
    type: actionTypes.MESSAGE_LIST_SAVING_STARTED,
});

export const savingFinished = () => ({
    type: actionTypes.MESSAGE_LIST_SAVING_FINISHED,
});