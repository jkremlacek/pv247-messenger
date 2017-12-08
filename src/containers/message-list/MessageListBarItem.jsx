import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
    DragSource,
    DropTarget
} from 'react-dnd';
import { MessageListBarItem as MessageListBarItemComponent } from '../../components/message-list/MessageListBarItem.jsx';

const messageItemDragSourceSpecs = {
    beginDrag(props) {
        props.onDragStarted();
        return { draggedItemId: props.item.id };
    },

    endDrag(props) {
        props.onDragEnded();
    },

    canDrag(props) {
        return !props.reorderDisabled;
    }
};

function collectDragSourceProps(connect) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    };
}

const messageItemDropTargetSpecs = {
    hover(props, monitor) {
        const draggedItemId = monitor.getItem().draggedItemId;
        const hoveredItemId = props.item.id;

        if (draggedItemId !== hoveredItemId) {
            props.onReorder(draggedItemId, hoveredItemId);
        }
    }
};

function collectDropTargetProps(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

const DndMessageListBarItem = DragSource('MessageItem', messageItemDragSourceSpecs, collectDragSourceProps)(
    DropTarget('MessageItem', messageItemDropTargetSpecs, collectDropTargetProps)(MessageListBarItemComponent));

DndMessageListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        messageText: PropTypes.string.isRequired,
        channelId: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        votedPlus: PropTypes.instanceOf(Immutable.Set).isRequired,
        votedMinus: PropTypes.instanceOf(Immutable.Set).isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
};

export { DndMessageListBarItem as MessageListBarItem };
