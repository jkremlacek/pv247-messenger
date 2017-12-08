import { connect } from 'react-redux';
import {uuid} from '../../utils/uuidGenerator';
import * as Immutable from 'immutable';
import { MessageListEditedItem } from '../../containers/message-list/MessageListEditedItem.jsx';
import {
    createNewItem,
    closeCreateNewForm,
} from '../../actions/message-list/actionCreators';

const mapStateToProps = (state, ownProps) => ({
    submitButtonText: 'Send',
    item: {
        id: uuid(),
        messageText: '',
        ownerId: ownProps.ownerId,
        channelId: ownProps.channelId,
        score: 0,
        votedPlus: Immutable.Set(),
        votedMinus: Immutable.Set()
    }
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(createNewItem(item)),
    onCancel: () => dispatch(closeCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessageListEditedItem);

export { connectedComponent as MessageListNewItem };
