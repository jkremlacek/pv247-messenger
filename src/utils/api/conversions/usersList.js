import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => {
    const oldData = serverDetails;
    let newData = [];

    let i = 0;
    const l = oldData.length;
    for (; i < l; i++) {
        const o = oldData[i];
        const cd = JSON.parse(o.customData);

        if (cd === null) {
            newData = {
                id: o.email,
                fullName: 'noName',
                phone: '',
                avatarId: 'noAvatar.png',
            };
        } else {
            newData[i] = {
                id: o.email,
                fullName: cd.fullName,
                phone: cd.phone,
                avatarId: cd.avatarId,
            };
        }
    }

    return Immutable.List(newData);
};