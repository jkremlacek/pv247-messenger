import { connect } from 'react-redux';
import { MessageListBarItem } from '../../containers/message-list/MessageListBarItem.jsx';
import {
    deleteItem,
    moveItem,
    startEditingItem,
    startDragging,
    stopDragging
} from '../../actions/message-list/actionCreators';

const mapStateToProps = (state) => ({
    expandDisabled: !!state.editedItemId || state.isDragging,
    reorderDisabled: !!state.editedItemId ||  state.isDragging,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteItem(ownProps.item.id)),
    onExpand: () => dispatch(startEditingItem(ownProps.item.id)),
    onReorder: (moveItemId, destinationItemId) => dispatch(moveItem(moveItemId, destinationItemId)),
    onDragStarted: () => dispatch(startDragging()),
    onDragEnded: () => dispatch(stopDragging())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListBarItem);

export { connectedComponent as MessageListBarItem };
