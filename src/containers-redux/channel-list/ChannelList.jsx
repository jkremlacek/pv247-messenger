import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../components/channel-list/ChannelList.jsx';
import { openCreateNewForm } from '../../actions/channel-list/actionCreators';

const getListOfItems = (channelItems) => channelItems.allIds.map(id => channelItems.byId.get(id)).toList();
const getListOfItemsMemoized = memoizee(getListOfItems);

const mapStateToProps = (state) => ({
    list: getListOfItemsMemoized(state.channelApp.channelItems),
    editedChannelItemId: state.channelApp.editedChannelItemId,
    selectedChannelItemId: state.channelApp.selectedChannelItemId,
    createNewFormVisible: state.channelApp.isCreateNewFormOpen
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export { connectedComponent as ChannelListRedux };
