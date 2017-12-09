import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { MessageList } from '../../components/message-list/MessageList.jsx';
import { openCreateNewForm } from '../../actions/message-list/actionCreators';

const getListOfItems = (messageItems) => messageItems.allIds.map(id => messageItems.byId.get(id)).toList();
const getListOfItemsMemoized = memoizee(getListOfItems);

const mapStateToProps = (state) => ({
    list: getListOfItemsMemoized(state.messageApp.messageItems),
    editedMessageItemId: state.messageApp.editedMessageItemId,
    createNewFormVisible: state.messageApp.isCreateNewFormOpen,
    selectedChannelItemId: state.channelApp.selectedChannelItemId,
    ownerId: state.shared.token.email,
    usersList: state.users.list
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageList);

export { connectedComponent as MessageListRedux };
