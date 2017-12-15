import {createApiMessageItemUri, createApiMessageListUri} from '../../constants/api';
import {performAuthorizedRequest} from '../performAuthorizedRequest';

import {convertFromServerDetails as getMessageList, convertToServerDetails as transformMessage} from '../../utils/api/conversions/messageList';
import {
    endProcessingMessageList, failFetchingMessageList, startProcessingMessageList,
    updateLocalMessageList
} from './actionCreators';
import {FAILED_FETCH_MESSAGE_LIST_MESSAGE} from '../../constants/uiConstants';
import {fetchReceive} from '../../utils/api/fetchReceive';
import {fetchPost} from '../../utils/api/fetchPost';
import {fetchRequest} from '../../utils/api/fetchRequest';
import {fetchDelete} from '../../utils/api/fetchDelete';

export const fetchRemoteMessageList = (channelId, fetchFunc = fetchReceive) =>
    async (dispatch, getState) => {
        dispatch(startProcessingMessageList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiMessageListUri(channelId);

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const response = await fetchFunc(requestUri, authToken);
                const transformedResponse = getMessageList(response);

                dispatch(updateLocalMessageList(transformedResponse));
            }).then(()=> dispatch(endProcessingMessageList()));
        }
        catch (error) {
            return dispatch(failFetchingMessageList(FAILED_FETCH_MESSAGE_LIST_MESSAGE, error));
        }
    };

export const updateRemoteMessage = (message, fetchFunc = fetchRequest) =>
    async (dispatch, getState) => {
        dispatch(startProcessingMessageList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiMessageItemUri(message.channelId, message.id);

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                const body = transformMessage(message);
                await fetchFunc(requestUri, authToken, body);
            }).then(()=> dispatch(endProcessingMessageList()));
        }
        catch (error) {
            return dispatch(failFetchingMessageList(FAILED_FETCH_MESSAGE_LIST_MESSAGE, error));
        }
    };

export const removeRemoteMessage = (message, fetchFunc = fetchDelete) =>
    async (dispatch, getState) => {
        dispatch(startProcessingMessageList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiMessageItemUri(message.channelId, message.id);

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                await fetchFunc(requestUri, authToken);
            }).then(()=> dispatch(endProcessingMessageList()));
        }
        catch (error) {
            return dispatch(failFetchingMessageList(FAILED_FETCH_MESSAGE_LIST_MESSAGE, error));
        }
    };

export const addRemoteMessage = (message, fetchFunc = fetchPost) =>
    async (dispatch, getState) => {
        dispatch(startProcessingMessageList());

        const authToken = getState().shared.token.value;
        const requestUri = createApiMessageListUri(message.channelId);

        try {
            return await performAuthorizedRequest(dispatch, async () => {

                const body = transformMessage(message);
                await fetchFunc(requestUri, authToken, body);
            }).then(()=> dispatch(endProcessingMessageList()));
        }
        catch (error) {
            return dispatch(failFetchingMessageList(FAILED_FETCH_MESSAGE_LIST_MESSAGE, error));
        }
    };