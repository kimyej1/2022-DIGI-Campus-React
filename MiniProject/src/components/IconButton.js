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

const IconButton = props => {
    return (
        <TouchableOpacity>
            <Icon source={props.type} />
        </TouchableOpacity>
    );
};

IconButton.propTypes = {
    types : propTypes.oneOf(Object.values(images)).isRequired,
    
};

export default IconButton;