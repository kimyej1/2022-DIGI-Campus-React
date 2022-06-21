import React, { useState } from 'react';    // 상태정보를 관리하기 위해 useState 사용
import { View, Text } from 'react-native';
import MyButton from './MyButton';  // 같은 위치니까 /components/ 없이 그냥 MyButton

const Counter = () => {

    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);
    /*
        useState를 사용할건데, 처음 초기값을 0으로 줄거야(count = 0)
        앞으로 count를 바꾸려면, setCount() 라는 함수를 사용하면 바꿔줄게 (두번째 파라미터는 setter의 이름이다! -> function pointer)
            * setCount() 는 Setter 이므로, 파라미터가 필수! (뭘로 바꿔줘야하는지?)

        const count = 0;
        function setCount(XXX) {
            this.count = XXX;
        }
        -> 이런거랑 같은 의미!!!!

        그런데 const = read only 인데 count 가 왜 바뀔 수 있을까?
            const [count, setCount] 는 원래 const countState 머 이런 변수인데, 그 변수가 배열 형식이라
            countState[0] = count, countState[1] = setCount 인것!
            
            function setCount(count + 1) {
                파라미터에 들어가는 count는 아직까지 안변했고,
                렌더링을 위해 여기서 Counter 라는 객체를 다시 부름 (단, count = count + 1 로 해서! (useState(1) 이렇게))
                -> 그러므로 한번의 Counter 안에서는 count가 바뀌는 게 아님!
            }
    */

    return (
        <View style={{ 
            alignContent : 'center',
            alignItems : 'center',
        }}>
            <Text style={{ fontSize:30, }}>{count}</Text>
            <Text style={{ fontSize:30, }}>{double}</Text>

            <MyButton title="+" onPress={ () => { 
                setCount(count + 1);
                setDouble(double + 2);
                }} />  
            <MyButton title="-" onPress={ () => { 
                setCount(count - 1);
                setDouble(double - 2);
                }} />  
        </View>
    );
};

export default Counter;