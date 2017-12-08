import React from 'react';
import PropTypes from 'prop-types';
import {
    ItemBar,
    TitlePane,
    Title,
    ActionPane,
    Action,
    Message,
    ActionPlaceholder,
    DangerAction
} from './MessageListBarItem.styles';
import { ItemPane} from './MessageListItem.styles';

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

function MessageListBarItem(props) {
    return (
        <ItemPane disabled="true">
            <ItemBar disabled="true">
                <ActionPane>
                    <ActionPlaceholder/>
                </ActionPane>
                <TitlePane>
                    <Title>{props.item.ownerId}</Title>
                </TitlePane>
                <ActionPane>
                    {
                        props.item.score > 0 ?
                            <ActionPlaceholder><b>+{props.item.score}</b></ActionPlaceholder>
                            :
                            <ActionPlaceholder><b>{props.item.score}</b></ActionPlaceholder>
                    }
                </ActionPane>
                <ActionPane>
                    <Action onClick={() => props.onPlus()}>
                        <i className="glyphicon glyphicon-plus" aria-hidden="true"/>
                    </Action>
                </ActionPane>
                <ActionPane>
                    <Action onClick={() => props.onMinus()}>
                        <i className="glyphicon glyphicon-minus" aria-hidden="true"/>
                    </Action>
                </ActionPane>
                <ActionPane>
                    {(props.isOwner ?
                    <DangerAction onClick={() => props.onDelete()}>
                        <i className="glyphicon glyphicon-remove" aria-hidden="true" />
                    </DangerAction> : <ActionPlaceholder/>
                    )}
                </ActionPane>
            </ItemBar>
            <ItemBar disabled="true">
                <ActionPane>
                    <ActionPlaceholder/>
                </ActionPane>
                <TitlePane>
                    <Message>
                        {props.item.messageText}
                    </Message>
                </TitlePane>
            </ItemBar>
        </ItemPane>
    );
}

MessageListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        messageText: PropTypes.string.isRequired,
        channelId: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
    isOwner: PropTypes.bool.isRequired
};

export { MessageListBarItem };