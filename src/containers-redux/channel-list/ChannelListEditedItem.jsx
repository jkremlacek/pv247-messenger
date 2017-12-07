import { connect } from 'react-redux';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem.jsx';
import {
    cancelEditingItem,
    updateItem,
    inviteUser
} from '../../actions/channel-list/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(updateItem(item)),
    inviteOnSubmit: (item, invitee) => dispatch(inviteUser(item, invitee)),
    onCancel: () => dispatch(cancelEditingItem()),
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListEditedItem);

export { connectedComponent as ChannelListEditedItem };
