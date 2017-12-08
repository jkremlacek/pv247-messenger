import { connect } from 'react-redux';
import { MessageListBarItem } from '../../containers/message-list/MessageListBarItem.jsx';
import {
    deleteItem,
    upVoteItem,
    downVoteItem
} from '../../actions/message-list/actionCreators';

const mapStateToProps = (state) => ({
    expandDisabled: !! state.editedMessageItemId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteItem(ownProps.item.id)),
    onPlus: (userId) => dispatch(upVoteItem(ownProps.item, userId)),
    onMinus: (userId) => dispatch(downVoteItem(ownProps.item, userId))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListBarItem);

export { connectedComponent as MessageListBarItem };
