import { combineReducers } from 'redux';
import { editedMessageItemId } from './editedItemId';
import { isCreateNewFormOpen } from './isCreateNewFormOpen';
import { isDragging } from './isDragging';
import { isSaving } from './isSaving';
import { items } from './items/items';

export const messageApp = combineReducers({
    messageItems: items,
    editedMessageItemId,
    isCreateNewFormOpen,
    isDragging,
    isSaving
});
