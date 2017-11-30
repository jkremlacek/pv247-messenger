import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { ChannelList } from '../../components/channel-list/ChannelList.jsx';
import { openCreateNewForm } from '../../actions/channel-list/actionCreators';

const getListOfItems = (items) => items.allIds.map(id => items.byId.get(id)).toList();
const getListOfItemsMemoized = memoizee(getListOfItems);

//TODO: items must be mapped as channel items not universal items
const mapStateToProps = (state) => ({
    list: getListOfItemsMemoized(state.messageApp.items),
    editedItemId: state.messageApp.editedItemId,
    createNewFormVisible: state.messageApp.isCreateNewFormOpen,
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelList);

export { connectedComponent as ChannelListRedux };
