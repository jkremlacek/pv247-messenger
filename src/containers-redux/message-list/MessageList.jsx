import memoizee from 'memoizee';
import { connect } from 'react-redux';
import { MessageList } from '../../components/message-list/MessageList.jsx';
import { openCreateNewForm } from '../../actions/message-list/actionCreators';

const getListOfItems = (items) => items.allIds.map(id => items.byId.get(id)).toList();
const getListOfItemsMemoized = memoizee(getListOfItems);

const mapStateToProps = (state) => ({
    list: getListOfItemsMemoized(state.messageApp.items),
    editedItemId: state.messageApp.editedItemId,
    createNewFormVisible: state.messageApp.isCreateNewFormOpen,
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNewClick: () => dispatch(openCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageList);

export { connectedComponent as MessageListRedux };
