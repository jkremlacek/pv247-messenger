import { combineReducers } from 'redux';
import { editedMessageItemId } from './editedItemId';
import { isCreateNewFormOpen } from './isCreateNewFormOpen';
import { isSaving } from './isSaving';
import { items } from './items/items';

export const messageApp = combineReducers({
    messageItems: items,
    editedMessageItemId,
    isCreateNewFormOpen,
    isSaving
});
