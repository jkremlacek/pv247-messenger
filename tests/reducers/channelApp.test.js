import {channelApp} from "../../src/reducers/channel-list/channelApp";
import {getInitialChannelItems} from "../../src/utils/getInitialItems";
import * as Immutable from 'immutable';
import {inviteUser, selectItem, updateLocalChannelList} from "../../src/actions/channel-list/actionCreators";

const channel = {
    id: "001",
    title: 'Family channel',
    ownerId: 'dad@family.com',
    members: Immutable.Set(['undefined@null.zero']),
};

const stateWithChannel = () => ({
    "channelItems": {
        "allIds": Immutable.List(["001"]),
        "byId": Immutable.Map([[ "001", {"id": "001", "members": Immutable.Set(["undefined@null.zero"]), "ownerId": "dad@family.com", "title": "Family channel"}]])
    },
    "editedChannelItemId": null,
    "isCreateNewFormOpen": false,
    "isDragging": false,
    "isSaving": false,
    "selectedChannelItemId": null});

test('update local channel list', () => {
    const channelList = Immutable.Map([["001", channel]]);

    const newState = channelApp({
                channelItems: {
                    ...getInitialChannelItems()
                }
            }, updateLocalChannelList(channelList));

    expect(newState).toEqual(stateWithChannel());
});

test('select item', () => {
    const newState = channelApp({
        channelItems: {
            allIds: Immutable.List(["001"]),
            byId: Immutable.Map([[ "001", {"id": "001", "members": Immutable.Set(["undefined@null.zero"]), "ownerId": "dad@family.com", "title": "Family channel"}]])
        }
    }, selectItem("001"));

    let stateWithSelectedChannel = stateWithChannel();
    stateWithSelectedChannel.selectedChannelItemId = "001";

    expect(newState).toEqual(stateWithSelectedChannel);
});

test('invite user', () => {
    const newState = channelApp({
        channelItems: {
            allIds: Immutable.List(["001"]),
            byId: Immutable.Map([[ "001", {"id": "001", "members": Immutable.Set(["undefined@null.zero"]), "ownerId": "dad@family.com", "title": "Family channel"}]])
        }
    }, inviteUser(channel,"test@user.com"));

    let stateWithInvitedUser = stateWithChannel();
    stateWithInvitedUser.channelItems.byId = Immutable.Map([[ "001", {"id": "001", "members": Immutable.Set(["undefined@null.zero", "test@user.com"]), "ownerId": "dad@family.com", "title": "Family channel"}]]);

    expect(newState).toEqual(stateWithInvitedUser);
});