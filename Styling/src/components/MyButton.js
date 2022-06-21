import React from 'react';
import { TouchableOpacity, Text } from 'react-native'; // Opacity : 불투명함

const MyButton = props => {
    //  변수도 만들고 프로그램도 하고,,
    return (
        <TouchableOpacity
            style={{ 
                backgroundColor : '#CDEFAB',
                padding : 10,
                margin : 10,
                borderRadius : 5
            }}
            
            onPress={ () => alert("MyButton Clicked!!") }
        >
            <Text style={{ 
                fontSize : 25 
            }}> {props.title || props.children} </Text> 
        </TouchableOpacity>
    );
    // props.children : text 속에 "World", "Children" 가 있으니, children = "world", "children"
};

export default MyButton;    // 가능하면 내 객체 이름과 똑같이.. 그치만 달라도 상관 없음!