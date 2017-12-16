import Immutable from "immutable";
import {
    convertFromServerDetails,
    convertToServerDetails
} from "../../../../src/utils/api/conversions/messageList";

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

const serverResponse = [
    {
        "id":"001M",
        "value":"Test message",
        "createdAt":"2017-12-15T15:47:10.5125502Z",
        "createdBy":"test@user.com",
        "updatedAt":"2017-12-15T15:47:10.5125502Z",
        "updatedBy":"test@user.com",
        "customData":"{\"id\":\"001\",\"messageText\":\"Test message\",\"ownerId\":\"test@user.com\",\"channelId\":\"002X\",\"score\":0,\"votedPlus\":[],\"votedMinus\":[]}"
    }];

test('to server request transformation test', async (done) => {
    expect(convertToServerDetails(message)).toEqual(serverRequest);

    done();
});

test('from server response transformation test', async (done) => {
    expect((convertFromServerDetails(serverResponse)).get("001M")).toEqual(message);

    done();
});

