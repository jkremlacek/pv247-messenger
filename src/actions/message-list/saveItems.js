import * as keys from '../../constants/localStorageKeys';
import {
    savingFinished,
    savingStarted
} from './actionCreators';

export const saveItems = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            localStorage.setItem(keys.ITEMS_ALL_IDS, JSON.stringify(getState().messageApp.messageItems.allIds.toJS()));
            localStorage.setItem(keys.ITEMS_BY_ID, JSON.stringify(getState().messageApp.messageItems.byId.toJS()));

            dispatch(savingFinished());
        }, 0);
    };
