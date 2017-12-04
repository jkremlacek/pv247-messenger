import React from 'react';
import PropTypes from 'prop-types';
import Ctx from '../../components/htmlcontext/backend';
import Immutable from 'immutable';
import { MessageListBarItem } from '../../containers-redux/message-list/MessageListBarItem.jsx';
import { MessageListNewItem } from '../../containers-redux/message-list/MessageListNewItem.jsx';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

class MessageList extends React.PureComponent {
    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        selectedChannelItemId: PropTypes.string,
        editedMessageItemId: PropTypes.string,
        isDragging: PropTypes.bool,
        onCreateNewClick: PropTypes.func.isRequired,
        ownerId: PropTypes.string
    };

    render() {
        let itemElements = this.props.list.filter(item => item.channelId === this.props.selectedChannelItemId).map(item =>
            (
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

        itemElements = itemElements.push((
            <CSSTransition key="new-item"
                timeout={{
                    enter: 350,
                    exit: 150
                }}
                classNames="new-item">
                <MessageListNewItem channelId={this.props.selectedChannelItemId} ownerId={this.props.ownerId}/>
            </CSSTransition>
        ));

        return (
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-xs-12">
                        <TransitionGroup>
                            {itemElements}
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
}

const DndTodoList = Ctx(MessageList);

export { DndTodoList as MessageList };
