import * as Immutable from 'immutable';
import { uuid } from './uuidGenerator';
import * as keys from '../constants/localStorageKeys';

const firstId = uuid();
const secondId = uuid();
const thirdId = uuid();

const firstItem = {
    id: firstId,
    title: 'Family channel',
    ownerId: 'dad@family.com',
    members: Immutable.List(),
};

const secondItem = {
    id: secondId,
    title: 'Public channel',
    ownerId: 'undefined@null.zero',
    members: Immutable.List(['undefined@null.zero'])
};

const thirdItem = {
    id: thirdId,
    title: 'Private channel',
    ownerId: 'dad@family.com',
    members: Immutable.List()
};

const allIds = Immutable.List([firstId, secondId, thirdItem]);
const byId = Immutable.Map([[firstId, firstItem], [secondId, secondItem], [thirdId, thirdItem]]);

export const getInitialChannelItems = () => {
    const storedMapJSON = localStorage.getItem(keys.ITEMS_CHANNEL_BY_ID);
    const storedListJSON = localStorage.getItem(keys.ITEMS_CHANNEL_ALL_IDS);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byId,
    };
};

const firstMessageId = uuid();
const secondMessageId = uuid();
const thirdMessageId = uuid;

const firstMessageItem = {
    id: firstMessageId,
    messsageText: 'this is first channel, first message',
    channelId: firstId,
    ownerId: 'undefined@null.zero'
};

const secondMessageItem = {
    id: secondMessageId,
    messsageText: 'this is first channel, second message',
    channelId: firstId,
    ownerId: 'dad@family.com'
};

const thirdMessageItem = {
    id: thirdMessageId,
    messsageText: 'this is second channel, first message',
    channelId: secondId,
    ownerId: 'undefined@null.zero'
};

const allMessageIds = Immutable.List([firstMessageId, secondMessageId, thirdMessageId]);
const byMessageIds = Immutable.Map([[firstMessageId,firstMessageItem],[secondMessageId,secondMessageItem],[thirdMessageId,thirdMessageItem]]);

export const getInitialMessageItems = () => {
    const storedMapJSON = localStorage.getItem(keys.ITEMS_MESSAGE_BY_ID);
    const storedListJSON = localStorage.getItem(keys.ITEMS_MESSAGE_ALL_IDS);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allMessageIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byMessageIds,
    };
};


