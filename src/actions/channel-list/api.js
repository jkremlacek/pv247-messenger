import {createApiChannelListUri} from '../../constants/api';
import {performAuthorizedRequest} from '../performAuthorizedRequest';

import {convertFromServerDetails as getChannelList} from '../../utils/api/conversions/channelList';
import {failFetchingChannelList, startFetchingChannelList, updateChannelList} from './actionCreators';
import {FAILED_FETCH_CHANNEL_LIST_MESSAGE} from '../../constants/uiConstants';
import {fetchReceive} from '../../utils/api/fetchReceive';

export const fetchChannelList = () =>
    async (dispatch, getState) => {
        dispatch(startFetchingChannelList());

        const authToken = getState().shared.token;
        const requestUri = createApiChannelListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const response = await fetchReceive(requestUri, authToken);
                const transformedResponse = getChannelList(response);

                dispatch(updateChannelList(transformedResponse));
            });
        }
        catch (error) {
            return dispatch(failFetchingChannelList(FAILED_FETCH_CHANNEL_LIST_MESSAGE, error));
        }
    };