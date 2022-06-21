import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor : '#EFABAC',
                padding : 15,
                margin : 10,
                borderRadius : 5,
            }}
        >
            onPress={}
            <Text style={{fontSize : 20, color : '#FFFFFF'}}>Press Button</Text>
        </TouchableOpacity>
    );
};

export default EventButton;