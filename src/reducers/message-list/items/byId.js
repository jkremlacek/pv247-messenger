import * as Immutable from 'immutable';
import {
    MESSAGE_LIST_ITEM_CREATE,
    MESSAGE_LIST_ITEM_DELETE,
    MESSAGE_LIST_ITEM_UPDATE,
    MESSAGE_LIST_ITEM_UPVOTE,
    MESSAGE_LIST_ITEM_DOWNVOTE,
    MESSAGE_LIST_UPDATE,
} from '../../../constants/actionTypes';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case MESSAGE_LIST_ITEM_CREATE:
            return previousState.set(action.payload.item.id, { ...action.payload.item });

        case MESSAGE_LIST_ITEM_UPDATE:
            return previousState.mergeIn([action.payload.item.id], { ...action.payload.item });

        case MESSAGE_LIST_ITEM_UPVOTE:

            if (action.payload.item.votedPlus.has(action.payload.id)) {
                action.payload.item.score -= 1;
                action.payload.item.votedPlus = action.payload.item.votedPlus.delete(action.payload.id);
            } else if (action.payload.item.votedMinus.has(action.payload.id)) {
                action.payload.item.score += 2;
                action.payload.item.votedMinus = action.payload.item.votedMinus.delete(action.payload.id);
                action.payload.item.votedPlus = action.payload.item.votedPlus.add(action.payload.id);
            } else {
                action.payload.item.score += 1;
                action.payload.item.votedPlus = action.payload.item.votedPlus.add(action.payload.id);
            }

            return previousState.mergeIn([action.payload.item.id], { ...action.payload.item });
        case MESSAGE_LIST_ITEM_DOWNVOTE:

            if (action.payload.item.votedMinus.has(action.payload.id)) {
                action.payload.item.score += 1;
                action.payload.item.votedMinus = action.payload.item.votedMinus.delete(action.payload.id);
            } else if (action.payload.item.votedPlus.has(action.payload.id)) {
                action.payload.item.score -= 2;
                action.payload.item.votedPlus = action.payload.item.votedPlus.delete(action.payload.id);
                action.payload.item.votedMinus = action.payload.item.votedMinus.add(action.payload.id);
            } else {
                action.payload.item.score -= 1;
                action.payload.item.votedMinus = action.payload.item.votedMinus.add(action.payload.id);
            }

            return previousState.mergeIn([action.payload.item.id], { ...action.payload.item });
        case MESSAGE_LIST_ITEM_DELETE:
            return previousState.delete(action.payload.id);

        case MESSAGE_LIST_UPDATE:
            return previousState = action.payload.list;

        default:
            return previousState;
    }
};
