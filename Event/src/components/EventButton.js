import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {
    const _onPress = () => {alert('Press!!!')};  // Styling 과 다르게, App.js 에서 onPress를 정의하지 않고 여기서 다 해놓기
    const _onLongPress = () => {alert('Long Press!!!')};
    const _onPressIn = () => {console.log(`onPressIn()`)};  // ' 대신 `도 허용! (metro에 로그 남음)
    const _onPressOut = () => {console.log(`onPressOut()`)};


    return (    // return 되어 화면에 뿌려지는 부분
        <TouchableOpacity
            style={{
                backgroundColor : '#BC7DC0',
                padding : 15,
                margin : 10,
                borderRadius : 5,
            }}
            onPress={_onPress}
            onLongPress={_onLongPress}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
        >
            <Text style={{fontSize : 20, color : '#FFFFFF'}}>Press Button</Text>
        </TouchableOpacity>
    );
};

export default EventButton;