import * as Immutable from 'immutable';
import { uuid } from './uuidGenerator';
import * as keys from '../constants/localStorageKeys';

const firstId = uuid();
const secondId = uuid();

const firstItem = {
    id: firstId,
    title: 'Wash dishes',
    description: 'Not again!'
};

const secondItem = {
    id: secondId,
    title: 'Kill spider',
    description: 'All lives matter'
};

const allIds = Immutable.List([firstId, secondId]);
const byId = Immutable.Map([[firstId, firstItem], [secondId, secondItem]]);

export const getInitialMessageItems = () => {
    const storedMapJSON = localStorage.getItem(keys.ITEMS_MESSAGE_BY_ID);
    const storedListJSON = localStorage.getItem(keys.ITEMS_MESSAGE_ALL_IDS);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byId,
    };
};

export const getInitialChannelItems = () => {
    const storedMapJSON = localStorage.getItem(keys.ITEMS_CHANNEL_BY_ID);
    const storedListJSON = localStorage.getItem(keys.ITEMS_CHANNEL_ALL_IDS);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byId,
    };
};
