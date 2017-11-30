import { connect } from 'react-redux';
import {uuid} from '../../utils/uuidGenerator';
import { MessageListEditedItem } from '../../containers/message-list/MessageListEditedItem.jsx';
import {
    createNewItem,
    closeCreateNewForm,
} from '../../actions/message-list/actionCreators';

const mapStateToProps = () => ({
    submitButtonText: 'Create',
    item: {
        id: uuid(),
        title: '',
        description: ''
    }
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(createNewItem(item)),
    onCancel: () => dispatch(closeCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListEditedItem);

export { connectedComponent as MessageListNewItem };
