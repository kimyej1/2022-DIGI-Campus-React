import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';


// ShadowBox.js
// shadow / elevation

export default () => {      // 이름이 없다 (원래는 export Name () => {}), 디폴트니까 이름이 'ShadowBox'인거랑 똑같음!
    return (
        <View style={styles.shadow}>

        </View>
    );
};

const styles = StyleSheet.create({
    shadow : {
        backgroundColor : '#FFFFFF',
        width : 200,
        height : 200,

        ...Platform.select({
            ios : {
                shadowColor : '#000000',
                shadowOffset : {   // 가로/세로로부터 떨어진 거리
                    width : 10,
                    height : 10,
                    shadowRadius : 10,
                    shadowOpacity : 0.5,    // 투명도
                },
            },
            android : {   // 만약 안드로이드에서 인식 못하는 속성정보를 넣으면, 무시함
                elevation : 20,
            },
        }),
    }
});