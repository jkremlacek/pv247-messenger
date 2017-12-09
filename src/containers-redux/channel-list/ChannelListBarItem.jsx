import { connect } from 'react-redux';
import { ChannelListBarItem } from '../../containers/channel-list/ChannelListBarItem.jsx';
import {
    selectItem,
    startEditingItem
} from '../../actions/channel-list/actionCreators';
import {fetchRemoteChannelList, removeRemoteChannel} from '../../actions/channel-list/api';

const mapStateToProps = (state) => ({
    expandDisabled: !!state.editedChannelItemId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(removeRemoteChannel(ownProps.item))
        .then(() => dispatch(fetchRemoteChannelList())),
    onExpand: () => dispatch(startEditingItem(ownProps.item.id)),
    onPick: () => dispatch(selectItem(ownProps.item.id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListBarItem);

export { connectedComponent as ChannelListBarItem };
