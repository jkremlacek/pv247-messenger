import { getInitialChannelItems, getInitialMessageItems } from './getInitialItems';
import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    messageApp: {
        messageItems: {
            ...getInitialMessageItems()
        }
    },
    channelApp: {
        channelItems: {
            ...getInitialChannelItems()
        }
    },
    shared: {
        token: getPersistedToken()
    }
});