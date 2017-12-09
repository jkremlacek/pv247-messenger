const API_URI = 'https://pv247messaging.azurewebsites.net/api';
const API_APP_ID = 'cd89d662-0045-4521-8ff5-6db84451d9fb';

export const API_AUTH_URI = `${API_URI}/auth`;
export const API_FILE_URI = `${API_URI}/file`;
export const createApiUserUri = (userEmail) => `${API_URI}/${API_APP_ID}/user/${userEmail}`;
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`;

export const createApiChannelListUri = () => `${API_URI}/app/${API_APP_ID}`;

export const USER_EMAIL = 'undefined@null.zero';