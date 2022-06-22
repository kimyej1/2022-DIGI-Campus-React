import React from 'react';
import styled from 'styled-components/native';
// import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';

// width - 40 : 양쪽 20만큼씩을 띄워두려고 20 * 2 = 40
const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.main,

}))`
    width : ${ ({width}) => width - 40 }px;
    height : 60px;
    margin : 20px 30px;
    padding : 20px 20px;
    border-radius : 10px;
    background-color : ${({theme}) => theme.itemBackground};
    font-size : 20px;
    color : ${({theme}) => theme.text};
`;

const Input = props => {

    // const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width;  // 위, 아래 두개 같은 기능

    return (
        <StyledInput 
            width={width} 
            placeholder={props.placeholder} 
            maxLength={10} 
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType = "done"  // 엔터(리턴) 하면 완료로 볼것인지?
            keyboardAppearance="dark"
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing}
            value={props.value}
        />
    );
};

Input.propTypes = {
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    onChangeText : PropTypes.func.isRequired,
    onSubmitEditing : PropTypes.func.isRequired,
};

export default Input;