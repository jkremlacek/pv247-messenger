import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
    ItemBar,
    TitlePane,
    Title,
    ActionPane,
    CenterPane,
    VoteAction,
    Message,
    AvatarImage,
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
                <TitlePane>
                    <div className="col-xs-8 " key="picture">
                        <AvatarImage
                            className="img-rounded"
                            alt="Profile picture"
                            src={props.owner.avatarId}
                        />
                    </div>
                </TitlePane>
                <TitlePane>
                    <Title>{props.owner.fullName}</Title>
                </TitlePane>
                <CenterPane/>
                <ActionPane>
                    {
                        props.item.score > 0 ?
                            <ActionPlaceholder><b>+{props.item.score}</b></ActionPlaceholder>
                            :
                            <ActionPlaceholder><b>{props.item.score}</b></ActionPlaceholder>
                    }
                </ActionPane>
                <ActionPane>
                    <VoteAction onClick={() => props.onPlus(props.userId)} active={props.item.votedPlus.has(props.userId)} positive={true}>
                        <i className="glyphicon glyphicon-plus" aria-hidden="true"/>
                    </VoteAction>
                </ActionPane>
                <ActionPane>
                    <VoteAction onClick={() => props.onMinus(props.userId)} active={props.item.votedMinus.has(props.userId)} positive={false}>
                        <i className="glyphicon glyphicon-minus" aria-hidden="true"/>
                    </VoteAction>
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
        score: PropTypes.number.isRequired,
        votedPlus: PropTypes.instanceOf(Immutable.Set).isRequired,
        votedMinus: PropTypes.instanceOf(Immutable.Set).isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
    isOwner: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    owner: PropTypes.instanceOf(Object).isRequired
};

export { MessageListBarItem };