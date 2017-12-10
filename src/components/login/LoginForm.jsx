import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uuid } from '../../utils/uuidGenerator';

class LoginForm extends React.PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onCreate: PropTypes.func.isRequired,
        email: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    componentWillMount() {
        this.setState(() => ({ componentId: uuid() }));
    }

    updateInputValue(evt) {
        this.setState({inputValue:evt.target.value});
    }

    createUserWithCheck(value) {
        if (confirm("Are you sure? (back-end does not allow user removal)") == true) {
            this.props.onCreate(value);
        }
    }

    render() {
        const { componentId } = this.state;
        const loginId = `${componentId}_login`;

        return (
            <form>
                <div className="form-group">
                    <label
                        className="sr-only"
                        htmlFor={loginId}
                    >
                        E-mail
                    </label>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                        </div>
                        <input
                            className="form-control"
                            type="email"
                            id={loginId}
                            defaultValue={this.props.email}
                            autoFocus='true'
                            onChange={evt => this.updateInputValue(evt)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    disabled={this.props.email === this.state.inputValue}
                    onClick={() => this.props.onSubmit(this.state.inputValue)}
                >
                    Come on in
                </button>
                <br/><br/>
                <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    disabled={this.props.email === this.state.inputValue}
                    onClick={() => this.createUserWithCheck(this.state.inputValue)}
                >
                    Create new user
                </button>
            </form>
        );
    }
}

export { LoginForm };