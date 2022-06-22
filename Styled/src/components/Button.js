import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    background-color : ${ props => 
        props.title == 'React' ? props.theme.blue : props.theme.purple
    };
    border-radius : 10px;
    padding : 15px 20px;
    margin : 10px 5px;
    justify-content : center;
`;

const Title = styled.Text`
    font-size : 20px;
    font-weight : 600;
    color : ${props => props.theme.text};
`;

const Button = props => {
    
    // 컨테이너에 타이틀이 없으면, 자식에 타이틀이 전달되지가않음. 자식에도 타이틀이 있다면 자식 타이틀 사용
    return (
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;