import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => {
    const oldData = serverDetails.channels;
    const newData = {};

    let i = 0;
    const l = oldData.length;
    for (; i < l; i++) {
        const o = oldData[i];
        const cd = JSON.parse(o.customData);

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
                members: Immutable.Set(cd.members),
                ownerId: cd.ownerId,
            };
        }
    }

    return Immutable.Map(newData);
};

export const convertToServerDetails = (details, operation, id) => [{
    value: {
        id: details.id,
        name: details.title,
        customData: JSON.stringify(details),
    },
    path: '/channels/' + id ,
    op: operation
}];