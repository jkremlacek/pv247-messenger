import { connect } from 'react-redux';
import {uuid} from '../../utils/uuidGenerator';
import Immutable from 'immutable';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem.jsx';
import {
    createNewItem,
    closeCreateNewForm,
} from '../../actions/channel-list/actionCreators';
import {addRemoteChannel} from '../../actions/channel-list/api';

const mapStateToProps = (state, ownProps) => ({
    submitButtonText: 'Create',
    editForm: false,
    item: {
        id: uuid(),
        title: '',
        ownerId: ownProps.ownerId,
        members: Immutable.Set([ownProps.ownerId])
    }
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(createNewItem(item)).then(dispatch(addRemoteChannel(item))),
    onCancel: () => dispatch(closeCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListEditedItem);

export { connectedComponent as ChannelListNewItem };
