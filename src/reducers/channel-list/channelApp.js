import { combineReducers } from 'redux';
import { editedChannelItemId } from './editedItemId';
import { selectedChannelItemId } from './selectedItemId';
import { isCreateNewFormOpen } from './isCreateNewFormOpen';
import { isDragging } from './isDragging';
import { isSaving } from './isSaving';
import { items } from './items/items';

export const channelApp = combineReducers({
    channelItems: items,
    editedChannelItemId,
    selectedChannelItemId,
    isCreateNewFormOpen,
    isDragging,
    isSaving
});
