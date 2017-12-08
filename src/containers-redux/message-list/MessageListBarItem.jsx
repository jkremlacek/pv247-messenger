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
    onPlus: () => dispatch(upVoteItem(ownProps.item)),
    onMinus: () => dispatch(downVoteItem(ownProps.item))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListBarItem);

export { connectedComponent as MessageListBarItem };
