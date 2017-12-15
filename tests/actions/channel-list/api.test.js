
import {
    endProcessingChannelList,
    startProcessingChannelList,
    updateLocalChannelList
} from '../../../src/actions/channel-list/actionCreators';
import {
    addRemoteChannel,
    fetchRemoteChannelList,
    removeRemoteChannel,
    updateRemoteChannel
} from '../../../src/actions/channel-list/api';
import {convertFromServerDetails as getChannelList} from '../../../src/utils/api/conversions/channelList';
import Immutable from "immutable";

test('fetch channel list test', async (done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    const serverReturnValue = {
        "id":"cd89d662-0045-4521-8ff5-6db84451d9fb",
        "channels":[
                {
                    "id":"a58f2ab4-fe00-4fd8-a618-c673e6e13de0",
                    "name":"Test channel",
                    "customData":
                        "{\"id\":\"a58f2ab4-fe00-4fd8-a618-c673e6e13de0\",\"title\":\"Test channel\",\"members\":[\"undefined@null.zero\",\"dad@family.com\",\"mum@family.com\",\"nerd@yahoo.com\"],\"ownerId\":\"undefined@null.zero\"}"
                }
            ]
    };

    const expectedValue = getChannelList(serverReturnValue);

    const dispatchable = fetchRemoteChannelList(() => serverReturnValue);
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingChannelList());
    expect(dispatch).toBeCalledWith(updateLocalChannelList(expectedValue));
    expect(dispatch).toHaveBeenLastCalledWith(endProcessingChannelList());
    done();
});

test('update channel test', async(done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    const channel = {
        id: "001",
        title: "TestChannel",
        ownerId: "test@user.com",
        members: Immutable.Set(["test@user.com", "test02@user.com"]),
    };

    var requestBody = "X";

    const dispatchable = updateRemoteChannel(channel, (a,b,c) => {requestBody = c;});
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingChannelList());
    expect(dispatch).toBeCalledWith(endProcessingChannelList());

    expect([{
                "op": "replace",
                "path": "/channels/001",
                "value": {"customData": "{\"id\":\"001\",\"title\":\"TestChannel\",\"ownerId\":\"test@user.com\",\"members\":[\"test@user.com\",\"test02@user.com\"]}", "id": "001", "name": "TestChannel"}
            }]).toEqual(requestBody);

    done();
});

test('delete channel test', async(done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    const channel = {
        id: "001",
        title: "TestChannel",
        ownerId: "test@user.com",
        members: Immutable.Set(["test@user.com", "test02@user.com"]),
    };

    var requestBody = "X";

    const dispatchable = removeRemoteChannel(channel, (a,b,c) => {requestBody = c;});
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingChannelList());
    expect(dispatch).toBeCalledWith(endProcessingChannelList());

    expect([{
        "op": "remove",
        "path": "/channels/001",
        "value": {"customData": "{\"id\":\"001\",\"title\":\"TestChannel\",\"ownerId\":\"test@user.com\",\"members\":[\"test@user.com\",\"test02@user.com\"]}", "id": "001", "name": "TestChannel"}
    }]).toEqual(requestBody);

    done();
});

test('add channel test', async(done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({shared: {token: {value: 'defaultToken'},}});

    const channel = {
        id: "001",
        title: "TestChannel",
        ownerId: "test@user.com",
        members: Immutable.Set(["test@user.com", "test02@user.com"]),
    };

    var requestBody = "X";

    const dispatchable = addRemoteChannel(channel, (a,b,c) => {requestBody = c;});
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startProcessingChannelList());
    expect(dispatch).toBeCalledWith(endProcessingChannelList());

    expect([{
        "op": "add",
        "path": "/channels/-",
        "value": {"customData": "{\"id\":\"001\",\"title\":\"TestChannel\",\"ownerId\":\"test@user.com\",\"members\":[\"test@user.com\",\"test02@user.com\"]}", "id": "001", "name": "TestChannel"}
    }]).toEqual(requestBody);

    done();
});
