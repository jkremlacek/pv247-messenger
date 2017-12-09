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
    justify-content: flex-start;
`;

export const CenterPane = styled.div`
    display: flex;
    width: 100%;
    justify-constent: space-around;
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
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    justify-content: space-around;
    
    color: ${
    props => props.active ? (
            props.positive ?
                '#3cd959'
                : '#d9534f')
        : 'inherit'
    };
`;

export const Action = ActionPlaceholder.extend`
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    
    
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : '#eee'};
        color: ${props => props.disabled ? '#DDD' : '#555'};
    }
`;

export const VoteAction = Action.extend`
    
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : '#eee'};
        color: ${
                props => props.active ? (
                        props.positive ?
                            '#3cd959'
                            : '#d9534f')
                    : 'inherit'
                };
    }
`;

export const DangerAction = Action.extend`
    &:hover {
        background-color: ${props => props.disabled ? 'inherit' : '#d9534f'};
        color: ${props => props.disabled ? '#DDD' : '#FFF'};
    }
`;

export const AvatarImage = styled.div`
    background-image: url('${props => props.src || 'assets/no-profile.png'}'); 
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
    height: 40px;
    width: 40px;
    overflow: hidden;
`;