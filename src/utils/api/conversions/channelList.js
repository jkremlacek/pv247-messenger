import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => {
    var oldData = serverDetails.channels;
    var newData = {};

    for (var i = 0, l = oldData.length; i < l; i++) {
        var o = oldData[i];
        var cd = JSON.parse(o.customData);

        if (cd === null) {
            newData[o.id] = {
                id: o.id,
                title: o.name,
                members: Immutable.Set(['undefined@null.zero']),
                ownerId: 'undefined@null.zero',
            };
        } else {
            newData[o.id] = {
                id: o.id,
                title: o.name,
                members: cd.members,
                ownerId: cd.ownerId,
            };
        }
    }

    return Immutable.Map(newData);
};

export const convertToServerDetails = (details, operation) => JSON.stringify([{
    path: '/channels/' + details.id,
    op: operation,
    value: {
        id: details.id,
        name: details.title,
        customData: JSON.stringify(details),
    }
}]);