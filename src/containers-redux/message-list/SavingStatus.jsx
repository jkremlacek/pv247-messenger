import { connect } from 'react-redux';
import { SavingStatus } from '../../components/message-list/SavingStatus.jsx';
import { saveItems } from '../../actions/message-list/saveItems';

const mapStateToProps = (state) => ({
    //TODO: rename all state.messageApp occurences with appropriate name
    watchedEntity: state.messageApp.items,
    isSaving: state.messageApp.isSaving,
});

const mapDispatchToProps = (dispatch) => ({
    save: () => dispatch(saveItems())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(SavingStatus);

export { connectedComponent as SavingStatus };
