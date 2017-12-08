import { uuid } from '../../utils/uuidGenerator';
import * as actionTypes from '../../constants/actionTypes';

export const createNewItem = (newItem) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_CREATE,
    payload: {
        item: {
            ...newItem,
            // note that we have an explicit dependency and will refactor this
            // to use dependency injection in following commits
            id: uuid()
        },
    }
});

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

export const upVoteItem = (item) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_UPVOTE,
    payload: {
        item,
    }
});

export const downVoteItem = (item) => ({
    type: actionTypes.MESSAGE_LIST_ITEM_DOWNVOTE,
    payload: {
        item,
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