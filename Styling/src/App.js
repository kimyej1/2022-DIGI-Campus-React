import React from 'react';
import { Text, View, Button } from 'react-native';  // react의 내장 컴포넌트 (built-in)
import MyButton from './components/MyButton';       // components/MyButton을 사용하기
import Counter from './components/Counter';

const App = () => {
    return (
        <View
            // inline styling
            // {} 한개짜리는 프로그램영역(변수), {{}} 두개짜리는 텍스트영역
            style={{    
                flex : 1,
                backgroundColor : '#ABCDEF',
                alignItems : 'center',
                justifyContent : 'center',
            }}
        >
            <Text style={{
                fontSize : 30,
                margin : 20
            }}>
                Built-in Component : Button
            </Text>   
            <Button 
                title="MyButton"
                onPress={ () => alert("Click") }
            />

            <MyButton title="React" onPress={() => alert('React')}/>
            <MyButton title="Native" onPress={() => { alert('Native') }}/>
            {/* <MyButton /> */}
            <MyButton title="World" onPress={() => alert('Title')}/>
            <MyButton onPress ={() => alert('Children')}> Children </MyButton>

            <Counter />
                
        </View>
    );
};

export default App;

/*
    JSX : Javascript
        HTML
            style의 문제
            CSS 문법
                background-color : #FF0000; -- snake 표기법 
            <div style='background-color:#FF0000;'>aaa</div> -- 이렇게 inline으로 할 수도 있었다.

    나만의 버튼 : Custom button -> MyButton
        <img src = 'a.jpg' width='100' alt='test'>

    Property, attribute => props

    const [a, b] = useState(init);
    const [state, setState] = useState(initState);
        useState() 호출될 때, 파라미터 initState 라는 값을 초기값으로 전달
        state라는 값을 반환하고,
        setState() : setter

*/