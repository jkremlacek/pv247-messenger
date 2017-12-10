import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
    ItemBar,
    TitlePane,
    Title,
    ActionPane,
    Action,
    ActionPlaceholder,
    DangerAction
} from './ChannelListBarItem.styles';
import { ItemPane} from './ChannelListItem.styles';

function ConnectDnd(props) {
    return props.connectFunc(
        <div>
            {props.children}
        </div>
    );
}

ConnectDnd.prototypes = {
    connectFunc: PropTypes.func.isRequired
};

function ChannelListBarItem(props) {
    return (
        <ItemPane>
            <ItemBar disabled={false === props.isOwner || props.expandDisabled } selected={props.isSelected}>
                <ActionPane>
                    <Action onClick={props.onPick}>
                        <i className="glyphicon glyphicon-menu-right" aria-hidden="true" />
                    </Action>
                </ActionPane>
                {(props.isOwner === true ?
                    <ActionPane>
                        <Action disabled={props.expandDisabled} onClick={props.expandDisabled ? null : props.onExpand}>
                            <i className="glyphicon glyphicon-menu-down" aria-hidden="true"/>
                        </Action>
                    </ActionPane> :
                    <ActionPane>
                        <ActionPlaceholder/>
                    </ActionPane>
                )}
                <TitlePane disabled={props.expandDisabled} onClick={props.expandDisabled || props.isOwner === false ? props.onPick : props.onExpand}>
                    <Title>{props.item.title}</Title>
                </TitlePane>
                {(props.isOwner === true ?
                    <ActionPane>
                        <DangerAction onClick={() => props.onDelete()}>
                            <i className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </DangerAction>
                    </ActionPane> : <ActionPane disabled={true}/>
                )}
            </ItemBar>
        </ItemPane>
    );
}

ChannelListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        members: PropTypes.instanceOf(Immutable.Set).isRequired,
    }).isRequired,
    isSelected: PropTypes.bool,
    expandDisabled: PropTypes.bool,
    isOwner: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onPick: PropTypes.func.isRequired
};

export { ChannelListBarItem };