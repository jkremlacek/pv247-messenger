import {createApiChannelListUri} from '../../constants/api';
import {performAuthorizedRequest} from '../performAuthorizedRequest';

import {convertFromServerDetails as getChannelList, convertToServerDetails as transformChannel} from '../../utils/api/conversions/channelList';
import {
    endProcessingChannelList, failFetchingChannelList, startProcessingChannelList,
    updateLocalChannelList
} from './actionCreators';
import {FAILED_FETCH_CHANNEL_LIST_MESSAGE} from '../../constants/uiConstants';
import {fetchReceive} from '../../utils/api/fetchReceive';
import {fetchPatch} from '../../utils/api/fetchPatch';

const PATCH_OPERATION_ADD = 'add';
const PATCH_OPERATION_REPLACE = 'replace';
const PATCH_OPERATION_REMOVE = 'remove';

export const fetchRemoteChannelList = () =>
    async (dispatch, getState) => {
        dispatch(startProcessingChannelList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiChannelListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const response = await fetchReceive(requestUri, authToken);
                const transformedResponse = getChannelList(response);

                dispatch(updateLocalChannelList(transformedResponse));
            }).then(()=> dispatch(endProcessingChannelList()));
        }
        catch (error) {
            return dispatch(failFetchingChannelList(FAILED_FETCH_CHANNEL_LIST_MESSAGE, error));
        }
    };

export const updateRemoteChannel = (channel) =>
    async (dispatch, getState) => {
        dispatch(startProcessingChannelList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiChannelListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                const body = transformChannel(channel, PATCH_OPERATION_REPLACE, channel.id);
                await fetchPatch(requestUri, authToken, body);
            }).then(()=> dispatch(endProcessingChannelList()));
        }
        catch (error) {
            return dispatch(failFetchingChannelList(FAILED_FETCH_CHANNEL_LIST_MESSAGE, error));
        }
    };

export const removeRemoteChannel = (channel) =>
    async (dispatch, getState) => {
        dispatch(startProcessingChannelList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiChannelListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                const body = transformChannel(channel, PATCH_OPERATION_REMOVE, channel.id);
                await fetchPatch(requestUri, authToken, body);
            }).then(()=> dispatch(endProcessingChannelList()));
        }
        catch (error) {
            return dispatch(failFetchingChannelList(FAILED_FETCH_CHANNEL_LIST_MESSAGE, error));
        }
    };

export const addRemoteChannel = (channel) =>
    async (dispatch, getState) => {
        dispatch(startProcessingChannelList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiChannelListUri();

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                const body = transformChannel(channel, PATCH_OPERATION_ADD, '-');
                await fetchPatch(requestUri, authToken, body);
            }).then(()=> dispatch(endProcessingChannelList()));
        }
        catch (error) {
            return dispatch(failFetchingChannelList(FAILED_FETCH_CHANNEL_LIST_MESSAGE, error));
        }
    };