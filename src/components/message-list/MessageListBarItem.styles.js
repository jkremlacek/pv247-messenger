import styled from 'styled-components';

export const ItemBar = styled.div`
    display: flex;
    
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : '#f5f5f5'};
    }
`;

export const TitlePane = styled.div`
    cursor: 'default';
    padding: 0 4px;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
`;

export const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word
`;

export const Message = styled.div`
    padding-top: 8px;
    padding-bottom: 16px;
`;

export const ActionPane = styled.div`;
    display: flex;
`;

export const ActionPlaceholder = styled.div`
    width: 40px;
    height: 40px;
`;

export const Action = ActionPlaceholder.extend`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    color: ${props => props.disabled ? '#DDD' : '#777'};
    
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : '#eee'};
        color: ${props => props.disabled ? '#DDD' : '#555'};
    }
`;

export const DangerAction = Action.extend`
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : '#d9534f'};
        color: ${props => props.disabled ? '#DDD' : '#FFF'};
    }
`;