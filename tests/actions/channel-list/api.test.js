
import {
    endProcessingChannelList,
    startProcessingChannelList,
    updateLocalChannelList
} from '../../../src/actions/channel-list/actionCreators';
import {fetchRemoteChannelList} from '../../../src/actions/channel-list/api';
import {convertFromServerDetails as getChannelList} from '../../../src/utils/api/conversions/channelList';

test('fetch channel list test', async (done) => {
    const dispatch = jest.fn(action => action);
    const getState = () => ({
        shared: {
            token: {
                value: 'defaultToken'
            },
        }
    });

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