import Immutable from "immutable";
import {
    convertFromServerDetails,
    convertToServerDetails
} from "../../../../src/utils/api/conversions/channelList";

test('to server request transformation test', async (done) => {

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

    expect(serverRequest).toEqual(convertToServerDetails(channel, "replace", channel.id));

    done();
});

test('from server response transformation test', async (done) => {

    const channel = {
        id: "001",
        title: "TestChannel",
        ownerId: "test@user.com",
        members: Immutable.Set(["test@user.com", "test02@user.com"]),
    };

    const serverResponse = {
        "id":"cd89d662-0045-4521-8ff5-6db84451d9fb",
        "channels":
            [
                {
                    "id":"001",
                    "name":"TestChannel",
                    "customData":"{\"id\":\"001\",\"title\":\"TestChannel\",\"members\":[\"test@user.com\", \"test02@user.com\"],\"ownerId\":\"test@user.com\"}"},
            ]};

    expect(channel).toEqual((convertFromServerDetails(serverResponse)).get("001"));

    done();
});
