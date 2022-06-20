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

/*
    { (() => {}) () }

    제일 바깥 중괄호 : 변수 쓰기 -> 이 안에서 프로그램을 하겠다!
*/

const App = () => {
    const name = "KB"; 
    return(
        <View style = {styles.container}>  
            <Text style={styles.text}>
                { (() => {
                    if(name === "KB") return 'COMPANY : KBSTAR';
                    else if(name == "kb") return 'company : kbstar';
                    else return "회사명 : 국민은행";
                }) () }
            </Text>

            <Text style={styles.text}> 
                My Company is { name === "KB" ? 'name KB' : 'Facebook' }    {/* 삼항연산자  (a > b ? 참 : 거짓) */}
            </Text>
            
            <Text>논리연산자 AND : </Text>

            { name === "KB" && (
                <Text style={styles.text}> AND 연산 테스트1 </Text>      
                // 이 라인은 !null 이니까, 항상 참! ( name === "KB" 면 뒤에까지 오니까 출력하고, 틀리면 뒤에까지 못오고 멈춰서 출력안함 ) -> if 대신 쓰기 좋다
            ) }

            { name !== "KB1" && (
                <Text style={styles.text}> AND 연산 테스트2 </Text>      
            ) }

            <Text>논리연산자 OR : </Text>

            { name !== "KB" || (
                <Text style={styles.text}> OR 연산 테스트 </Text>      
                // OR은 이거 쓸일이 잘 없을 것.. AND에 if보다 편하다
            ) }

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