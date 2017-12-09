import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/login/LoginForm.jsx';
import { authenticateUser } from '../../actions/shared/authenticateUser';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (value) => dispatch(authenticateUser(ownProps.from, value)),
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
