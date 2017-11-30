import * as keys from '../../constants/localStorageKeys';
import {
    savingFinished,
    savingStarted
} from './actionCreators';

export const saveItems = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            localStorage.setItem(keys.ITEMS_CHANNEL_ALL_IDS, JSON.stringify(getState().messageApp.channelItems.allIds.toJS()));
            localStorage.setItem(keys.ITEMS_CHANNEL_BY_ID, JSON.stringify(getState().messageApp.channelItems.byId.toJS()));

            dispatch(savingFinished());
        }, 1000);
    };
