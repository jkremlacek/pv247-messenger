import * as Immutable from 'immutable';
import { uuid } from './uuidGenerator';
import * as keys from '../constants/localStorageKeys';

const firstId = uuid();
const secondId = uuid();

const firstItem = {
    id: firstId,
    title: 'Family channel'
};

const secondItem = {
    id: secondId,
    title: 'Public channel'
};

const allIds = Immutable.List([firstId, secondId]);
const byId = Immutable.Map([[firstId, firstItem], [secondId, secondItem]]);

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
    title: 'this is first channel, first message',
    channelId: firstId
};

const secondMessageItem = {
    id: secondMessageId,
    title: 'this is first channel, second message',
    channelId: firstId
};

const thirdMessageItem = {
    id: thirdMessageId,
    title: 'this is second channel, first message',
    channelId: 'XX'
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


