import {createApiFilerUri, createApiUserListUri} from '../../constants/api';
import {convertFromServerDetails as getUsersList} from '../../utils/api/conversions/usersList';
import {FAILED_FETCH_USER_LIST_MESSAGE} from '../../constants/uiConstants';
import {performAuthorizedRequest} from '../performAuthorizedRequest';
import {fetchReceive} from '../../utils/api/fetchReceive';
import {endProcessingUserList, failFetchingUserList, loadUsersList, startProcessingUserList} from './actionCreators';

export const fetchRemoteUsersList = (fetchFunc = fetchReceive) =>
    async (dispatch, getState) => {
        dispatch(startProcessingUserList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiUserListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const response = await fetchFunc(requestUri, authToken);
                const transformedResponse = getUsersList(response);

                //combine user list with avatar links
                let i = 0;
                const l = transformedResponse.size;
                for (; i < l; i++) {
                    const user = transformedResponse.get(i);
                    const requestAvatarUri = createApiFilerUri(user.avatarId);

                    transformedResponse.get(i).avatarId = await fetchFunc(requestAvatarUri, authToken);
                }

                dispatch(loadUsersList(transformedResponse));
            }).then(()=> dispatch(endProcessingUserList()));
        }
        catch (error) {
            return dispatch(failFetchingUserList(FAILED_FETCH_USER_LIST_MESSAGE, error));
        }
    };