import Immutable from "immutable";
import {
    convertFromServerDetails,
    convertToServerDetails
} from "../../../../src/utils/api/conversions/channelList";

const channel = {
    id: "001",
    title: "TestChannel",
    ownerId: "test@user.com",
    members: Immutable.Set(["test@user.com", "test02@user.com"]),
};

const serverRequest = [{
    "op": "replace",
    "path": "/channels/001",
    "value": {"customData": "{\"id\":\"001\",\"title\":\"TestChannel\",\"ownerId\":\"test@user.com\",\"members\":[\"test@user.com\",\"test02@user.com\"]}", "id": "001", "name": "TestChannel"}
}];

const serverResponse = {
    "id":"cd89d662-0045-4521-8ff5-6db84451d9fb",
    "channels":
        [
            {
                "id":"001",
                "name":"TestChannel",
                "customData":"{\"id\":\"001\",\"title\":\"TestChannel\",\"members\":[\"test@user.com\", \"test02@user.com\"],\"ownerId\":\"test@user.com\"}"},
        ]};

test('to server request transformation test', async (done) => {
    expect(convertToServerDetails(channel, "replace", channel.id)).toEqual(serverRequest);

    done();
});

test('from server response transformation test', async (done) => {
    expect((convertFromServerDetails(serverResponse)).get("001")).toEqual(channel);

    done();
});

