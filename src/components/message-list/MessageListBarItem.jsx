import React from 'react';
import PropTypes from 'prop-types';
import {
    ItemBar,
    TitlePane,
    Title,
    ActionPane,
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
                    <Title>{props.item.messsageText}</Title>
                </TitlePane>
                <TitlePane>
                    <Title>{props.item.ownerId}</Title>
                </TitlePane>
                {(props.isOwner ?
                    <ActionPane>
                        <DangerAction onClick={() => props.onDelete()}>
                            <i className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </DangerAction>
                    </ActionPane> : <ActionPane/>
                )}
            </ItemBar>
        </ItemPane>
    );
}

MessageListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        messsageText: PropTypes.string.isRequired,
        channelId: PropTypes.string.isRequired,
        ownerId: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    isOwner: PropTypes.bool.isRequired
};

export { MessageListBarItem };