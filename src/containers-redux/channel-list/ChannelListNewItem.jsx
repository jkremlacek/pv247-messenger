var Immutable = require('immutable');

import { connect } from 'react-redux';
import {uuid} from '../../utils/uuidGenerator';
import { ChannelListEditedItem } from '../../containers/channel-list/ChannelListEditedItem.jsx';
import {
    createNewItem,
    closeCreateNewForm,
} from '../../actions/channel-list/actionCreators';

const mapStateToProps = (state, ownProps) => ({
    submitButtonText: 'Create',
    item: {
        id: uuid(),
        title: '',
        ownerId: ownProps.ownerId,
        members: Immutable.List(),
    }
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(createNewItem(item)),
    onCancel: () => dispatch(closeCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ChannelListEditedItem);

export { connectedComponent as ChannelListNewItem };
