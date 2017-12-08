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
    members: Immutable.Set(['undefined@null.zero']),
};

const secondItem = {
    id: secondId,
    title: 'Public channel',
    ownerId: 'undefined@null.zero',
    members: Immutable.Set(['undefined@null.zero'])
};

const thirdItem = {
    id: thirdId,
    title: 'Private channel',
    ownerId: 'dad@family.com',
    members: Immutable.Set([])
};

const allIds = Immutable.List([firstId, secondId, thirdId]);
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
    messageText: 'this is first channel, first message',
    channelId: firstId,
    ownerId: 'undefined@null.zero',
    score: 0,
    votedPlus: Immutable.Set(),
    votedMinus: Immutable.Set()
};

const secondMessageItem = {
    id: secondMessageId,
    messageText: 'this is first channel, second message, with extremely long text content: ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque tellus. Curabitur et ultrices dui, ' +
    'cursus luctus mauris. Sed quis scelerisque ex, non sollicitudin dolor. Vivamus placerat ipsum ut diam mattis, ' +
    'at dignissim arcu fringilla. Nunc venenatis sapien vel urna dapibus, nec egestas ipsum facilisis. ' +
    'Aenean finibus nunc nec accumsan tristique. Pellentesque gravida nec sem nec pellentesque. ',
    channelId: firstId,
    ownerId: 'dad@family.com',
    score: 0,
    votedPlus: Immutable.Set(),
    votedMinus: Immutable.Set()
};

const thirdMessageItem = {
    id: thirdMessageId,
    messageText: 'this is second channel, first message',
    channelId: secondId,
    ownerId: 'undefined@null.zero',
    score: 0,
    votedPlus: Immutable.Set(),
    votedMinus: Immutable.Set()
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

const firstUser = {
    id: 'undefined@null.zero',
    name: 'MasterAdmin',
    avatar: 'https://image.flaticon.com/teams/slug/freepik.jpg'
};

const secondUser = {
    id: 'dad@family.com',
    name: 'Dad',
    avatar: 'https://png.icons8.com/?id=37607&size=280'
};

const thirdUser = {
    id: 'mum@family.com',
    name: 'Mother',
    avatar: 'https://maxcdn.icons8.com/Share/icon/Food//cherry1600.png'
};

const allUsers = Immutable.List([firstUser, secondUser, thirdUser]);

export const getInitialUsers = () => {
    return {
        list: allUsers
    };
};


