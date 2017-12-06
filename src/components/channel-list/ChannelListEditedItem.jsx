import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import { FormPane, ButtonRow } from './ChannelListEditedItem.styles';
import { ItemPane} from './ChannelListItem.styles';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            ownerId: PropTypes.string.isRequired,
            members: PropTypes.instanceOf(Immutable.Set).isRequired,
        }).isRequired,
        submitDisabled: PropTypes.bool,
        submitButtonText: PropTypes.string.isRequired,
        onTitleChange: PropTypes.func.isRequired,
        onDescriptionChange: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        users: PropTypes.instanceOf(Immutable.List).isRequired
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
                            <label htmlFor="title">Title</label>
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
                        <div className="form-group">
                            <label htmlFor="title">Owner</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="title"
                                value={this.props.item.ownerId}
                                onKeyDown={this._handleEscKey}
                            />
                        </div>
                        <div className="form-group">
                            <Select
                                value={this.props.item.members}
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
                            <button
                                type="button"
                                className="btn btn-default btn-sm"
                                onClick={this.props.onCancel}
                            >
                                Cancel
                            </button>
                        </ButtonRow>
                    </form>
                </FormPane>
            </ItemPane>
        );
    }
}