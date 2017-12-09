import { push } from 'connected-react-router';
import {
    dismissError,
    receiveValidToken
} from './actionCreators';
import {
    failAuthentication,
    startAuthentication
} from './actionCreators';
import * as keys from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    FAILED_AUTHENTICATION_MESSAGE
} from '../../constants/uiConstants';

export const authenticateUser = (destinationLocation, userEmail) =>
    (dispatch) => {
        dispatch(startAuthentication());

        // Butchering email value from json, antipattern, should be done differently
        // Note: cache should not be re-used by repeated calls to JSON.stringify.
        var cache = [];
        var json = JSON.stringify(userEmail, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            } return value;
        });
        cache = null; // Enable garbage collection

        json = json.substring(json.indexOf('email'), json.length);
        json = json.substring(json.indexOf(':') + 2, json.indexOf('}')-1);

        userEmail = json;

        alert(JSON.stringify(userEmail));

        return fetchAuthToken(userEmail)
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(push(destinationLocation));

                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
