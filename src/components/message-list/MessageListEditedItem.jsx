import React from 'react';
import PropTypes from 'prop-types';
import { FormPane, ButtonRow } from './MessageListEditedItem.styles';
import { ItemPane} from './MessageListItem.styles';

export class MessageListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        }).isRequired,
        submitDisabled: PropTypes.bool,
        submitButtonText: PropTypes.string.isRequired,
        onTitleChange: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    componentDidMount(){
        const textLength = this.titleInput.value.length;

        this.titleInput.focus();
        this.titleInput.setSelectionRange(textLength, textLength);
    }

    _handleEscKey = (e) => {
        if (e.keyCode === 27) { // ESC key
            this.props.onCancel();
        }
    };

    render() {
        return (
            <ItemPane>
                <FormPane>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="title">Message</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={this.props.item.title}
                                onChange={this.props.onTitleChange}
                                ref={(input) => { this.titleInput = input; }}
                                onKeyDown={this._handleEscKey}
                            />
                        </div>
                        <ButtonRow>
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                                disabled={this.props.submitDisabled}
                                onClick={this.props.onSubmit}
                            >
                                {this.props.submitButtonText}
                            </button>
                        </ButtonRow>
                    </form>
                </FormPane>
            </ItemPane>
        );
    }
}