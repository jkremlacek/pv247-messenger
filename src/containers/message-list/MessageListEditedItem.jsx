import React from 'react';
import PropTypes from 'prop-types';
import { MessageListEditedItem as MessageListEditedItemComponent } from '../../components/message-list/MessageListEditedItem.jsx';

export class MessageListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        }).isRequired,
        submitButtonText: PropTypes.string.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            editedItem: props.item
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.item !== nextProps.item) {
            this.setState({
                editedItem: nextProps.item,
            });
        }
    }

    _onTitleChange = (event) => {
        const value = event.target.value;

        this.setState((previousState) => ({
            editedItem: {
                ...previousState.editedItem,
                title: value
            }
        }));
    };

    _onDescriptionChange = (event) => {
        const value = event.target.value;

        this.setState((previousState) => ({
            editedItem: {
                ...previousState.editedItem,
                description: value
            }
        }));
    };

    render() {
        return (
            <MessageListEditedItemComponent
                item={this.state.editedItem}
                submitDisabled={this.state.editedItem === this.props.item}
                submitButtonText={this.props.submitButtonText}
                onTitleChange={this._onTitleChange}
                onDescriptionChange={this._onDescriptionChange}
                onCancel={this.props.onCancel}
                onSubmit={() => this.props.onSubmit(this.state.editedItem)}
            />
        );
    }
}