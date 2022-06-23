import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { images } from '../Images';
import { theme } from '../theme';
import propTypes from 'prop-types';

const Icon = styled.Image`
    width : 30px;
    height : 30px;
    margin : 15px;
    tint-color : ${({theme}) => theme.text};
`;

const IconButton = ({type, onPressOut, id}) => {
    console.log('IconButton , IconButton , onPressOut = ', onPressOut)
    const _onPressOut = () => {
        console.log('IconButton , _onPressOut, id= ', id)
        onPressOut(id); // onPressOut에는 deleteTask가 들어있고(Task.js), deleteTask에는 _deleteTask가 들어있음(App.js)
    };

    return (
        <TouchableOpacity onPressOut={_onPressOut} >
            <Icon source={type} />
        </TouchableOpacity>
    );
};

IconButton.propTypes = {
    types : propTypes.oneOf(Object.values(images)).isRequired,
    id : propTypes.string,
    onPressOut : propTypes.func,
};

export default IconButton;