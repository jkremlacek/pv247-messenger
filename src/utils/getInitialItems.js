import * as Immutable from 'immutable';
//import { uuid } from './uuidGenerator';

// const firstId = uuid();
// const secondId = uuid();
// const thirdId = uuid();
//
// const firstItem = {
//     id: firstId,
//     title: 'Family channel',
//     ownerId: 'dad@family.com',
//     members: Immutable.Set(['undefined@null.zero']),
// };
//
// const secondItem = {
//     id: secondId,
//     title: 'Public channel',
//     members: Immutable.Set(['undefined@null.zero']),
//     ownerId: 'undefined@null.zero',
// };
//
// const thirdItem = {
//     id: thirdId,
//     title: 'Private channel',
//     members: Immutable.Set([]),
//     ownerId: 'dad@family.com',
// };

//const allIds = Immutable.List([firstId, secondId, thirdId]);
const allIds = Immutable.List();

//const byId = Immutable.Map([[firstId, firstItem], [secondId, secondItem], [thirdId, thirdItem]]);
const byId = Immutable.Map();

export const getInitialChannelItems = () => {
    return {
        allIds: allIds,
        byId: byId,
    };
};

// const firstMessageId = uuid();
// const secondMessageId = uuid();
// const thirdMessageId = uuid();

// const firstMessageItem = {
//     id: firstMessageId,
//     messageText: 'this is first channel, first message',
//     channelId: firstId,
//     ownerId: 'undefined@null.zero',
//     score: 0,
//     votedPlus: Immutable.Set(),
//     votedMinus: Immutable.Set()
// };
//
// const secondMessageItem = {
//     id: secondMessageId,
//     messageText: 'this is first channel, second message, with extremely long text content: ' +
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque tellus. Curabitur et ultrices dui, ' +
//     'cursus luctus mauris. Sed quis scelerisque ex, non sollicitudin dolor. Vivamus placerat ipsum ut diam mattis, ' +
//     'at dignissim arcu fringilla. Nunc venenatis sapien vel urna dapibus, nec egestas ipsum facilisis. ' +
//     'Aenean finibus nunc nec accumsan tristique. Pellentesque gravida nec sem nec pellentesque. ',
//     channelId: firstId,
//     ownerId: 'dad@family.com',
//     score: 0,
//     votedPlus: Immutable.Set(),
//     votedMinus: Immutable.Set()
// };
//
// const thirdMessageItem = {
//     id: thirdMessageId,
//     messageText: 'this is second channel, first message',
//     channelId: secondId,
//     ownerId: 'undefined@null.zero',
//     score: 0,
//     votedPlus: Immutable.Set(),
//     votedMinus: Immutable.Set()
// };

//const allMessageIds = Immutable.List([firstMessageId, secondMessageId, thirdMessageId]);
const allMessageIds = Immutable.List();

//const byMessageIds = Immutable.Map([[firstMessageId,firstMessageItem],[secondMessageId,secondMessageItem],[thirdMessageId,thirdMessageItem]]);
const byMessageIds = Immutable.Map();


export const getInitialMessageItems = () => {
    return {
        allIds: allMessageIds,
        byId: byMessageIds,
    };
};

// const firstUser = {
//     id: 'undefined@null.zero',
//     fullName: 'MasterAdmin',
//     avatarId: 'https://image.flaticon.com/teams/slug/freepik.jpg'
// };
//
// const secondUser = {
//     id: 'dad@family.com',
//     fullName: 'Dad',
//     avatarId: 'https://png.icons8.com/?id=37607&size=280'
// };
//
// const thirdUser = {
//     id: 'mum@family.com',
//     fullName: 'Mother',
//     avatarId: 'https://maxcdn.icons8.com/Share/icon/Food//cherry1600.png'
// };

//const allUsers = Immutable.List([firstUser, secondUser, thirdUser]);
const allUsers = Immutable.List();

export const getInitialUsers = () => {
    return allUsers;
};


