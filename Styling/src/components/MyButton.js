import React from 'react';
import { TouchableOpacity, Text } from 'react-native'; // Opacity : 불투명함

const MyButton = props => {     // 원래 () => 였는데, props를 파라미터로 넣어서 props => 로 바꿈
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

// Default Property 지정
MyButton.defaultProps = {
    title : 'DftMyButton'   // title이 없을 때.. 디폴트로 이거 넣기!
}

/*
    propTypes
        props의 데이터 타입을 명시
            데이터 오류 검사
            필수정보를 지정하지 않았을 때, 프로그램 오류 발생 문제를 해결
            협업의 문제점 해결 (필요 시 경고메시지 등으로 알려줄 수 있음)

        사용하려면 라이브러리가 설치되어있어야 한다 : "prop-types"
            npm install prop-types
*/
export default MyButton;    // 가능하면 내 객체 이름과 똑같이.. 그치만 달라도 상관 없음!