import styled from 'styled-components';

export const ItemBar = styled.div`
    display: flex;
    background-color: ${props => props.selected ? '#c0ea96' : 'inherit'};
    
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : props.selected ? '#a8d67c' : '#f5f5f5'};
    }
`;

export const TitlePane = styled.div`
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
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
`;

export const ActionPane = styled.div`;
    display: flex;
`;

export const Action = styled.div`
    width: 40px;
    height: 40px;
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

export const ActionPlaceholder = styled.div`
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    justify-content: space-around;
`;