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
        <ItemPane>
            <ItemBar>
                <TitlePane>
                    <Title>{props.item.title}</Title>
                </TitlePane>
                <ActionPane>
                    <DangerAction onClick={() => props.onDelete()}>
                        <i className="glyphicon glyphicon-remove" aria-hidden="true" />
                    </DangerAction>
                </ActionPane>
            </ItemBar>
        </ItemPane>
    );
}

MessageListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export { MessageListBarItem };