import { connect } from 'react-redux';
import { SavingStatus } from '../../components/channel-list/SavingStatus.jsx';
import { saveItems } from '../../actions/channel-list/saveItems';

const mapStateToProps = (state) => ({
    watchedEntity: state.channelApp.channelItems,
    isSaving: state.channelApp.isSaving,
});

const mapDispatchToProps = (dispatch) => ({
    save: () => dispatch(saveItems())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(SavingStatus);

export { connectedComponent as SavingStatus };
