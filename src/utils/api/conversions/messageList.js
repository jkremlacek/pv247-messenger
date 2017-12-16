import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => {
    const oldData = serverDetails;
    const newData = {};

    let i = 0;
    const l = oldData.length;
    for (; i < l; i++) {
        const o = oldData[i];
        const cd = JSON.parse(o.customData);

        if (cd === null) {
            newData[o.id] = {
                id: o.id,
                messageText: o.value,
                channelId: '0',
                ownerId: o.createdBy,
                score: 0,
                votedPlus: Immutable.Set(),
                votedMinus: Immutable.Set(),

                createdAt: o.createdAt,
                updatedAt: o.updatedAt,
                updatedBy: o.updatedBy,
            };
        } else {
            newData[o.id] = {
                id: o.id,
                messageText: o.value,
                channelId: cd.channelId,
                ownerId: o.createdBy,
                score: cd.score,
                votedPlus: Immutable.Set(cd.votedPlus),
                votedMinus: Immutable.Set(cd.votedMinus),

                createdAt: o.createdAt,
                updatedAt: o.updatedAt,
                updatedBy: o.updatedBy,
            };
        }
    }

    return Immutable.Map(newData);
};

export const convertToServerDetails = (details) => ({
    id: details.id,
    value: details.messageText,
    createdAt: details.createdAt,
    createdBy: details.ownerId,
    updatedAt: details.updatedAt,
    updatedBy: details.updatedBy,
    customData: JSON.stringify(details),
});