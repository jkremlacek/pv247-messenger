import * as Immutable from "immutable";
import {messageApp} from "../../src/reducers/message-list/messageApp";
import {downVoteItem, updateLocalMessageList, upVoteItem} from "../../src/actions/message-list/actionCreators";

const defaultMessage = () => ({
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
});

const stateWithMessage = () => (
    {
        "editedMessageItemId": null,
        "isCreateNewFormOpen": false,
        "isSaving": 0,
        "messageItems":
            {
                "allIds": Immutable.List(["001M"]),
                "byId": Immutable.Map(
                    [
                        ["001M",
                            {
                                "updatedAt": "2017-12-15T15:47:10.5125502Z",
                                "ownerId": "test@user.com",
                                "updatedBy": "test@user.com",
                                "score": 0,
                                "messageText": "Test message",
                                "votedPlus": Immutable.Set(),
                                "votedMinus": Immutable.Set(),
                                "id": "001M",
                                "createdAt": "2017-12-15T15:47:10.5125502Z",
                                "channelId": "002X"
                            }
                        ]
                    ]
                )
            }
    });

test('upvote message', () => {
    const messageList = Immutable.Map([["001M", defaultMessage()]]);
    let message = defaultMessage();

    const newState = messageApp({
        messageItems: {
            allIds: Immutable.List(["001M"]),
            byId: messageList
        }
    }, upVoteItem(message, "test@user.com"));

    let stateWithUpvotedMessage = stateWithMessage();

    stateWithUpvotedMessage.messageItems.byId = Immutable.Map(
        [
            ["001M",
                {
                    "updatedAt": "2017-12-15T15:47:10.5125502Z",
                    "ownerId": "test@user.com",
                    "updatedBy": "test@user.com",
                    "score": 1,
                    "messageText": "Test message",
                    "votedPlus": Immutable.Set(["test@user.com"]),
                    "votedMinus": Immutable.Set(),
                    "id": "001M",
                    "createdAt": "2017-12-15T15:47:10.5125502Z",
                    "channelId": "002X"
                }
            ]
        ]
    );

    expect(newState).toEqual(stateWithUpvotedMessage);
});

test('downvote message', () => {
    const messageList = Immutable.Map([["001M", defaultMessage()]]);
    let message = defaultMessage();

    const newState = messageApp({
        messageItems: {
            allIds: Immutable.List(["001M"]),
            byId: messageList
        }
    }, downVoteItem(message, "test@user.com"));

    let stateWithUpvotedMessage = stateWithMessage();

    stateWithUpvotedMessage.messageItems.byId = Immutable.Map(
        [
            ["001M",
                {
                    "updatedAt": "2017-12-15T15:47:10.5125502Z",
                    "ownerId": "test@user.com",
                    "updatedBy": "test@user.com",
                    "score": -1,
                    "messageText": "Test message",
                    "votedPlus": Immutable.Set(),
                    "votedMinus": Immutable.Set(["test@user.com"]),
                    "id": "001M",
                    "createdAt": "2017-12-15T15:47:10.5125502Z",
                    "channelId": "002X"
                }
            ]
        ]
    );

    expect(newState).toEqual(stateWithUpvotedMessage);
});

test('update local message list', () => {
    const messageList = Immutable.Map([["001M", defaultMessage()]]);

    const newState = messageApp({
        messageItems: {
            allIds: Immutable.List(),
            byId: Immutable.Map()
        }
    }, updateLocalMessageList(messageList));

    expect(newState).toEqual(stateWithMessage());
});