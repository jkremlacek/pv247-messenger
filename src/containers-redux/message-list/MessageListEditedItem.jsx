import { connect } from 'react-redux';
import { MessageListEditedItem } from '../../containers/message-list/MessageListEditedItem.jsx';
import {
    cancelEditingItem,
    updateItem,
} from '../../actions/message-list/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(updateItem(item)),
    onCancel: () => dispatch(cancelEditingItem()),
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(MessageListEditedItem);

export { connectedComponent as MessageListEditedItem };
