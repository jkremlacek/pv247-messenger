import {createApiFilerUri, createApiUserListUri} from '../../constants/api';
import {convertFromServerDetails as getUsersList} from '../../utils/api/conversions/usersList';
import {FAILED_FETCH_USER_LIST_MESSAGE} from '../../constants/uiConstants';
import {performAuthorizedRequest} from '../performAuthorizedRequest';
import {fetchReceive} from '../../utils/api/fetchReceive';
import {failFetchingUserList, loadUsersList, startProcessingUserList} from './actionCreators';
//import * as Immutable from 'immutable';

export const fetchRemoteUsersList = () =>
    async (dispatch, getState) => {
        dispatch(startProcessingUserList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiUserListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const response = await fetchReceive(requestUri, authToken);
                var transformedResponse = getUsersList(response);

                //combine user list with avatar links
                for (var i = 0, l = transformedResponse.size; i < l; i++) {
                    var user = transformedResponse.get(i);
                    var requestAvatarUri = createApiFilerUri(user.avatarId);

                    transformedResponse.get(i).avatarId = await fetchReceive(requestAvatarUri, authToken);
                }

                dispatch(loadUsersList(transformedResponse));
            });
        }
        catch (error) {
            return dispatch(failFetchingUserList(FAILED_FETCH_USER_LIST_MESSAGE, error));
        }
    };