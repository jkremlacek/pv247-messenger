import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { messageApp } from './message-list/messageApp';
import { channelApp } from './channel-list/channelApp';
import { profile } from './profile/profile';
import { shared } from './shared/shared';

export const app = combineReducers({
    channelApp,
    messageApp,
    profile,
    shared,
    form,
});
