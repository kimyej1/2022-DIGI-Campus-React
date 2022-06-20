import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({  // JS 처럼 A : B 형태로!
    container : {
        flex : 1,   // 안드로이드의 weight
        backgroundColor : '#ffff00',
        justifyContent : 'center',
        alignItems : 'center'
    }, 

    text : {
        fontSize : 30,   // 마지막꺼에도 콤마 있어도 상관없음~
    },

    nameText : {
        fontSize : 50
    }
});

const myStyle = StyleSheet.create({
    company : {
        fontSize : 15,
    },
    email : {
        fontSize : 8,
    }

});


// App은 한개만 있어야한다! 리턴도 한개! (그래서 텍스트 여러개일때 view, fragment같은걸로 묶어서 한개로 만듬)
const App = () => {
    const name = "김국민";  // 중괄호 : 변수 이름 쓸 때! (const(read only variable), let <= var)
    return (
        <View style = {styles.container}>  
            <Text>이름: {name}</Text>
            <Text>이름: 홍길동</Text>
            <Text style={styles.text}>이름: {name}</Text>
            <Text style={styles.nameText}>이름: 홍길동</Text>
            <Text>이름: {name}</Text>

            <Text style={myStyle.company}>회사명 : 국민은행</Text>
            <Text style={myStyle.email}>이메일 : kookmin@kbfg.com</Text>
        </View>
    );
};

export default App;

/*
- Fragment 는 생략이 가능하다.
- 생략할때는 import 에도 {Fragment} 생략 가능..

const App = () => {
    return (
        <>
            <Text>기본 형태</Text>
            <Text>Second</Text>
        </>
    );
};
*/

/*
- View : Div 와 같은 개념

    const App = () => {
        return (
            <Fragment>
                <Text>기본 형태</Text>
                <Text>Second</Text>
            </Fragment>
        );
    };
*/