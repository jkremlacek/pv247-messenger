import { validateResponse } from './validateResponse';

export const fetchPost = (uri, token, bodyJson) =>
    token !== null ?
        fetch(
            uri,
            {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(bodyJson),
            })
            .then(validateResponse) :
        fetch(
            uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(bodyJson),
            })
            .then(validateResponse);

