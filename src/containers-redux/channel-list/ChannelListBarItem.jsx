import { connect } from 'react-redux';
import { ChannelListBarItem } from '../../containers/channel-list/ChannelListBarItem.jsx';
import {
    deleteItem,
    moveItem,
    startEditingItem,
    startDragging,
    stopDragging
} from '../../actions/channel-list/actionCreators';

const mapStateToProps = (state) => ({
    //TODO: dragging for channels
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
const connectedComponent = enhancer(ChannelListBarItem);

export { connectedComponent as ChannelListBarItem };
