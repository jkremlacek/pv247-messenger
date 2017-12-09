import { connect } from 'react-redux';
import {uuid} from '../../utils/uuidGenerator';
import Immutable from 'immutable';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem.jsx';
import {

    closeCreateNewForm,
} from '../../actions/channel-list/actionCreators';
import {addRemoteChannel, fetchRemoteChannelList} from '../../actions/channel-list/api';

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
    onSubmit: (item) => dispatch(addRemoteChannel(item))
            .then(() => dispatch(fetchRemoteChannelList()))
    ,
    onCancel: () => dispatch(closeCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListEditedItem);

export { connectedComponent as ChannelListNewItem };
