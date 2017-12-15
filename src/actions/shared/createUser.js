import {
    dismissError,
} from './actionCreators';
import {
    failAuthentication,
} from './actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    FAILED_AUTHENTICATION_MESSAGE,
} from '../../constants/uiConstants';
import {fetchPost} from '../../utils/api/fetchPost';
import {createApiUserListUri} from '../../constants/api';
import {performAuthorizedRequest} from '../performAuthorizedRequest';
import {authenticateUser} from './authenticateUser';

export const createUser = (destinationLocation, userEmail, fetchFunc = fetchPost) =>
    async (dispatch) => {

        const requestUri = createApiUserListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                const body = {
                    email:userEmail,
                    customData:'{"fullName":"New user","phone":"011-235813213460","avatarId":"ed7104e1-bfb9-455d-bd75-bd86deccd38b"}'
                };
                await fetchFunc(requestUri, null, body);

                dispatch(authenticateUser(destinationLocation, userEmail));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
    };