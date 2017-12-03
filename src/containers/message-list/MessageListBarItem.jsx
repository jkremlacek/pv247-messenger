import PropTypes from 'prop-types';
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
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
    expandDisabled: PropTypes.bool,
    reorderDisabled: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired
};

export { DndMessageListBarItem as MessageListBarItem };
