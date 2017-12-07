import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { ChannelListEditedItem as ChannelListEditedItemComponent } from '../../components/channel-list/ChannelListEditedItem.jsx';

export class ChannelListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            ownerId: PropTypes.string.isRequired,
            members: PropTypes.instanceOf(Immutable.Set).isRequired,
        }).isRequired,
        submitButtonText: PropTypes.string.isRequired,
        editForm: PropTypes.bool,
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        usersList: PropTypes.instanceOf(Immutable.List).isRequired,
        inviteOnSubmit: PropTypes.func,
        invitee: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            editedItem: props.item,
            invitee: ''
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

    _inviteOnChange = (event) => {
        this.setState(({
            invitee: event.target.value,
        }));
    };

    render() {
        return (
            <ChannelListEditedItemComponent
                item={this.state.editedItem}
                submitDisabled={this.state.editedItem === this.props.item}
                submitButtonText={this.props.submitButtonText}
                onTitleChange={this._onTitleChange}
                onDescriptionChange={this._onDescriptionChange}
                onCancel={this.props.onCancel}
                onSubmit={() => this.props.onSubmit(this.state.editedItem)}
                editForm={this.props.editForm}
                inviteOnSubmit={() => this.props.inviteOnSubmit(this.state.editedItem, this.state.invitee)}
                inviteOnChange={this._inviteOnChange}
                usersList={this.props.usersList}
                inviteDisabled={this.state.invitee === ''}
            />
        );
    }
}