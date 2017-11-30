import React from 'react';
import PropTypes from 'prop-types';
import Ctx from '../../components/htmlcontext/backend';
import Immutable from 'immutable';
import { ChannelListEditedItem } from '../../containers-redux/channel-list/ChannelListEditedItem.jsx';
import { ChannelListBarItem } from '../../containers-redux/channel-list/ChannelListBarItem.jsx';
import { ChannelListNewItem } from '../../containers-redux/channel-list/ChannelListNewItem.jsx';
import { ButtonRow } from './ChannelList.styles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

class ChannelList extends React.PureComponent {
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
                    <ChannelListEditedItem key={item.id} item={item} submitButtonText="Save" />
                </CSSTransition>
            ) : (
                <CSSTransition key={`bar-${item.id}`}
                    timeout={{
                        enter: 150,
                        exit: 0
                    }}
                    classNames="bar-item">
                    <ChannelListBarItem key={item.id} item={item} />
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
                    <ChannelListNewItem />
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

//TODO: fix
const DndTodoList = Ctx(ChannelList);

export { DndTodoList as ChannelList };
