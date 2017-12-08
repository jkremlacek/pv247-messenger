import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../components/channel-list/ChannelList.jsx';
import { openCreateNewForm } from '../../actions/channel-list/actionCreators';
import { fetchChannelList } from '../../actions/channel-list/api';

const getListOfItems = (channelItems) => channelItems.allIds.map(id => channelItems.byId.get(id)).toList();
const getListOfItemsMemoized = memoizee(getListOfItems);

const mapStateToProps = (state) => ({
    list: getListOfItemsMemoized(state.channelApp.channelItems),
    editedChannelItemId: state.channelApp.editedChannelItemId,
    selectedChannelItemId: state.channelApp.selectedChannelItemId,
    createNewFormVisible: state.channelApp.isCreateNewFormOpen,
    ownerId: state.profile.details.email,
    usersList: state.users.list
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
    fetchList: () => dispatch(fetchChannelList()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export { connectedComponent as ChannelListRedux };
