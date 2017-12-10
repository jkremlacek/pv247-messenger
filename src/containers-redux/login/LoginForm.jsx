import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/login/LoginForm.jsx';
import { authenticateUser } from '../../actions/shared/authenticateUser';
import {createUser} from '../../actions/shared/createUser';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (value) => dispatch(authenticateUser(ownProps.from, value)),
    onCreate: (value) => dispatch(createUser(ownProps.from, value)),
});

const mapStateToProps = () => ({
    email: ''
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(LoginForm);

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as LoginForm };
