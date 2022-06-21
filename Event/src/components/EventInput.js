import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {   

    const [text, setText] = useState('');
    const _onChange = event => {    // param : event
        setText( event.nativeEvent.text )
    };
    const _onChangeText = text => setText(text);    // text 면 이렇게 간단히 해도 된다.

    return (
        <View>
            <Text style={{fontSize : 25,}}>{text}</Text>
            <TextInput
                style={{
                    borderWidth : 1,
                    padding : 10,
                    margin : 10,
                    fontSize : 20,
                    borderRadius : 5
                }}
                placeholder= 'Insert Message'
                // onChange = {_onChange}
                onChangeText={_onChangeText}
            />
        </View>
    );
};

export default EventInput;