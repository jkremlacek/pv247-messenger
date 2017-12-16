
import {
    endProcessingMessageList,
    startProcessingMessageList,
    updateLocalMessageList
} from '../../../src/actions/message-list/actionCreators';
import {
    addRemoteMessage,
    fetchRemoteMessageList,
    removeRemoteMessage,
    updateRemoteMessage
} from '../../../src/actions/message-list/api';
import {convertFromServerDetails as getMessageList} from '../../../src/utils/api/conversions/messageList';
import Immutable from "immutable";

const message = {
    id: "001M",
    messageText: "Test message",
    channelId: "002X",
    ownerId: "test@user.com",
    score: 0,
    votedPlus: Immutable.Set(),
    votedMinus: Immutable.Set(),
    createdAt: "2017-12-15T15:47:10.5125502Z",
    updatedAt: "2017-12-15T15:47:10.5125502Z",
    updatedBy: "test@user.com",
};

const serverRequest = {
    "createdAt": "2017-12-15T15:47:10.5125502Z",
    "createdBy": "test@user.com",
    "customData": "{\"id\":\"001M\",\"messageText\":\"Test message\",\"channelId\":\"002X\",\"ownerId\":\"test@user.com\",\"score\":0,\"votedPlus\":[],\"votedMinus\":[],\"createdAt\":\"2017-12-15T15:47:10.5125502Z\",\"updatedAt\":\"2017-12-15T15:47:10.5125502Z\",\"updatedBy\":\"test@user.com\"}",
    "id": "001M",
    "updatedAt": "2017-12-15T15:47:10.5125502Z",
    "updatedBy": "test@user.com",
    "value": "Test message"
};

const serverReturnValue = [
    {
        "id":"001M",
        "value":"Test message",
        "createdAt":"2017-12-15T15:47:10.5125502Z",
        "createdBy":"test@user.com",
        "updatedAt":"2017-12-15T15:47:10.5125502Z",
        "updatedBy":"test@user.com",
        "customData":"{\"id\":\"001\",\"messageText\":\"Test message\",\"ownerId\":\"test@user.com\",\"channelId\":\"002X\",\"score\":0,\"votedPlus\":[],\"votedMinus\":[]}"
    }];

test('fetch message list test', async (done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});
    const expectedValue = getMessageList(serverReturnValue);

    const dispatchable = fetchRemoteMessageList(() => serverReturnValue);
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingMessageList());
    expect(dispatch).toBeCalledWith(updateLocalMessageList(expectedValue));
    expect(dispatch).toHaveBeenLastCalledWith(endProcessingMessageList());
    done();
});

test('update message test', async(done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    var requestBody = "X";

    const dispatchable = updateRemoteMessage(message, (a,b,c) => {requestBody = c;});
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingMessageList());
    expect(dispatch).toBeCalledWith(endProcessingMessageList());

    expect(requestBody).toEqual(serverRequest);

    done();
});

test('delete message test', async(done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    var requestBody = "X";

    const dispatchable = removeRemoteMessage(message, (a,b,c) => {requestBody = c;});
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingMessageList());
    expect(dispatch).toBeCalledWith(endProcessingMessageList());

    expect(requestBody).toEqual(serverRequest);

    done();
});

test('add message test', async(done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    var requestBody = "X";

    const dispatchable = addRemoteMessage(channel, (a,b,c) => {requestBody = c;});
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingMessageList());
    expect(dispatch).toBeCalledWith(endProcessingMessageList());

    expect(requestBody).toEqual(serverRequest);

    done();
});
