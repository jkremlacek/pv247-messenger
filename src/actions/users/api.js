import {createApiFilerUri, createApiUserListUri} from '../../constants/api';
import {convertFromServerDetails as getUsersList} from '../../utils/api/conversions/usersList';
import {FAILED_FETCH_USER_LIST_MESSAGE} from '../../constants/uiConstants';
import {performAuthorizedRequest} from '../performAuthorizedRequest';
import {fetchReceive} from '../../utils/api/fetchReceive';
import {endProcessingUserList, failFetchingUserList, loadUsersList, startProcessingUserList} from './actionCreators';
//import * as Immutable from 'immutable';

export const fetchRemoteUsersList = (fetchFunc = fetchReceive) =>
    async (dispatch, getState) => {
        dispatch(startProcessingUserList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiUserListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const response = await fetchFunc(requestUri, authToken);
                var transformedResponse = getUsersList(response);

                //combine user list with avatar links
                for (var i = 0, l = transformedResponse.size; i < l; i++) {
                    var user = transformedResponse.get(i);
                    var requestAvatarUri = createApiFilerUri(user.avatarId);

                    transformedResponse.get(i).avatarId = await fetchFunc(requestAvatarUri, authToken);
                }

                dispatch(loadUsersList(transformedResponse));
            }).then(()=> dispatch(endProcessingUserList()));
        }
        catch (error) {
            return dispatch(failFetchingUserList(FAILED_FETCH_USER_LIST_MESSAGE, error));
        }
    };