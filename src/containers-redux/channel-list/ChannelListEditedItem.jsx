import { connect } from 'react-redux';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem.jsx';
import {
    cancelEditingItem,
    updateItem,
} from '../../actions/channel-list/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(updateItem(item)),
    onCancel: () => dispatch(cancelEditingItem()),
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListEditedItem);

export { connectedComponent as ChannelListEditedItem };
