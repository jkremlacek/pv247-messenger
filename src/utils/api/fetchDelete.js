import { validateResponse } from './validateResponse';

export const fetchDelete = (uri, token) =>
    fetch(
        uri,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);