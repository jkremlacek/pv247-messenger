import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => {
    var oldData = serverDetails;
    var newData = [];

    for (var i = 0, l = oldData.length; i < l; i++) {
        var o = oldData[i];
        var cd = JSON.parse(o.customData);

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