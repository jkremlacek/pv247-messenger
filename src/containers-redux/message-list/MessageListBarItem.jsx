import { connect } from 'react-redux';
import { MessageListBarItem } from '../../containers/message-list/MessageListBarItem.jsx';
import {
    deleteItem,
    upVoteItem,
    downVoteItem
} from '../../actions/message-list/actionCreators';
import {fetchRemoteMessageList, removeRemoteMessage, updateRemoteMessage} from '../../actions/message-list/api';

const mapStateToProps = (state) => ({
    expandDisabled: !! state.editedMessageItemId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => {
        dispatch(deleteItem(ownProps.item.id));
        dispatch(removeRemoteMessage(ownProps.item));},
    onPlus: (userId) => dispatch(upVoteItem(ownProps.item, userId))
        .then(dispatch(updateRemoteMessage(ownProps.item)))
        .then(dispatch(fetchRemoteMessageList(ownProps.item.channelId))),
    onMinus: (userId) => dispatch(downVoteItem(ownProps.item, userId))
        .then(dispatch(updateRemoteMessage(ownProps.item)))
        .then(dispatch(fetchRemoteMessageList(ownProps.item.channelId))),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListBarItem);

export { connectedComponent as MessageListBarItem };
