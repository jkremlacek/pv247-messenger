import { connect } from 'react-redux';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem.jsx';
import {
    cancelEditingItem,
    inviteUser
} from '../../actions/channel-list/actionCreators';
import {fetchRemoteChannelList, updateRemoteChannel} from '../../actions/channel-list/api';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(updateRemoteChannel(item))
        .then(() => dispatch(fetchRemoteChannelList())),
    inviteOnSubmit: (item, invitee) => dispatch(inviteUser(item, invitee)).then(dispatch(updateRemoteChannel(item))),
    onCancel: () => dispatch(cancelEditingItem()),
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListEditedItem);

export { connectedComponent as ChannelListEditedItem };
