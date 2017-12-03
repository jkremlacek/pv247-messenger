import PropTypes from 'prop-types';
import {
    DragSource,
    DropTarget
} from 'react-dnd';
import { ChannelListBarItem as ChannelListBarItemComponent } from '../../components/channel-list/ChannelListBarItem.jsx';

const channelItemDragSourceSpecs = {
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

const channelItemDropTargetSpecs = {
};

function collectDropTargetProps(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

const DndChannelListBarItem = DragSource('ChannelItem', channelItemDragSourceSpecs, collectDragSourceProps)(
    DropTarget('ChannelItem', channelItemDropTargetSpecs, collectDropTargetProps)(ChannelListBarItemComponent));

DndChannelListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
    expandDisabled: PropTypes.bool,
    reorderDisabled: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
    onDragStarted: PropTypes.func.isRequired,
    onDragEnded: PropTypes.func.isRequired
};

export { DndChannelListBarItem as ChannelListBarItem };
