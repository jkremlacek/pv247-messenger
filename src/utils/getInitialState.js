import { getInitialItems } from './getInitialItems';
import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    messageApp: {
        items: {
            ...getInitialItems()
        }
    },
    shared: {
        token: getPersistedToken()
    }
});