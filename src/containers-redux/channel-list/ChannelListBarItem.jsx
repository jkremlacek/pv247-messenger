import { connect } from 'react-redux';
import { ChannelListBarItem } from '../../containers/channel-list/ChannelListBarItem.jsx';
import {
    deleteItem,
    selectItem,
    startEditingItem
} from '../../actions/channel-list/actionCreators';

const mapStateToProps = (state) => ({
    expandDisabled: !!state.editedChannelItemId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteItem(ownProps.item.id)),
    onExpand: () => dispatch(startEditingItem(ownProps.item.id)),
    onPick: () => dispatch(selectItem(ownProps.item.id))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListBarItem);

export { connectedComponent as ChannelListBarItem };
