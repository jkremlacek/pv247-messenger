import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { messageApp } from './message-list/messageApp';
import { profile } from './profile/profile';
import { shared } from './shared/shared';

export const app = combineReducers({
    messageApp,
    profile,
    shared,
    form,
});
