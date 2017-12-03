import { connect } from 'react-redux';
import { MessageListBarItem } from '../../containers/message-list/MessageListBarItem.jsx';
import {
    deleteItem,
    startEditingItem
} from '../../actions/message-list/actionCreators';

const mapStateToProps = (state) => ({
    expandDisabled: !! state.editedMessageItemId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteItem(ownProps.item.id)),
    onExpand: () => dispatch(startEditingItem(ownProps.item.id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListBarItem);

export { connectedComponent as MessageListBarItem };
