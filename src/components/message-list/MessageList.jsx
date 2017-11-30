import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Immutable from 'immutable';
import { MessageListEditedItem } from '../../containers-redux/message-list/MessageListEditedItem.jsx';
import { MessageListBarItem } from '../../containers-redux/message-list/MessageListBarItem.jsx';
import { MessageListNewItem } from '../../containers-redux/message-list/MessageListNewItem.jsx';
import { ButtonRow } from './MessageList.styles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

class MessageList extends React.PureComponent {
    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        editedItemId: PropTypes.string,
        createNewFormVisible: PropTypes.bool,
        isDragging: PropTypes.bool,
        onCreateNewClick: PropTypes.func.isRequired,
    };

    render() {
        let itemElements = this.props.list.map(item =>
            item.id === this.props.editedItemId ? (
                <CSSTransition key={`edited-${item.id}`}
                    timeout={{
                        enter: 250,
                        exit: 150
                    }}
                    classNames="edited-item">
                    <MessageListEditedItem key={item.id} item={item} submitButtonText="Save" />
                </CSSTransition>
            ) : (
                <CSSTransition key={`bar-${item.id}`}
                    timeout={{
                        enter: 150,
                        exit: 0
                    }}
                    classNames="bar-item">
                    <MessageListBarItem key={item.id} item={item} />
                </CSSTransition>
            )
        );

        if (this.props.createNewFormVisible) {
            itemElements = itemElements.push((
                <CSSTransition key="new-item"
                    timeout={{
                        enter: 350,
                        exit: 150
                    }}
                    classNames="new-item">
                    <MessageListNewItem />
                </CSSTransition>
            ));
        }

        return (
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-12">
                        <TransitionGroup>
                            {itemElements}
                        </TransitionGroup>
                    </div>
                </div>
                <ButtonRow className="row">
                    <div className="col-xs-12">
                        {!this.props.createNewFormVisible ?
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.props.onCreateNewClick}
                            >
                                Create new
                            </button> : null}
                    </div>
                </ButtonRow>
            </div>
        );
    }
}

const DndTodoList = DragDropContext(HTML5Backend)(MessageList);

export { DndTodoList as MessageList };
