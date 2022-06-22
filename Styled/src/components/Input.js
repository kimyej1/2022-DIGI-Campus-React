import React from 'react';
import styled from 'styled-components/native';


// 속성을 지정해주지 않고 src/App.js에서 넘어온 속성을 받아서 사용하도록 변경
const StyledInput = styled.TextInput.attrs( props => ({
    placeholder : 'Enter Text..',
    placeholderTextColor : props.borderColor,

}))`
    width : 200px;
    height : 60px;
    margin : 5px;
    padding : 10px;
    border-radius : 10px;
    border : 2px;
    border-color : ${props => props.borderColor};
    font-size : 20px;
`;

const Input = props => {
    return (
        <StyledInput borderColor={props.borderColor} />
    );
};

// const StyledInput = styled.TextInput`
//     width : 200px;
//     height : 60px;
//     margin : 5px;
//     padding : 10px;
//     border-radius : 10px;
//     border : 2px;
//     border-color : #3499dd;
//     font-size : 20px;
// `;


// const Input = () => {
//     return (
//         <StyledInput placeholder="Insert Text" placeholderTextColor='#3499dd' />
//     );
// };

export default Input;