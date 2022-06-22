import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import { textStyle, viewStyle } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';

const App = () => {
    // 속성 중 겹치는게 있으면 배열 중 뒤에껄 따라간다 (안겹치는 것들은 다 적용됨)
    return (
        <View style={styles.container}>
            
            <ShadowBox>그림자</ShadowBox>

        {/*
            <View style={styles.item1} />
            <View style={styles.item2} />
            <View style={styles.item3} />
        */}
        </View>

    /*
        <View style={viewStyle.container}> 
            <Header />
            <Contents />
            <Footer />

            <Text style={styles.text}>
                Style CSS
            </Text>
            <Text style={textStyle.text}>
                Style CSS
            </Text>
            <Text style={[styles.text, {color : '#0000FF'}]}>
                Style CSS
            </Text>
            <Text style={[styles.text, styles.error]}>
                Style CSS
            </Text>
            <Text style={styles.error}>
                ERROR
            </Text>

            <EventButton />
            <EventInput />

        </View>
    */
    );
};

// Class형 StyleSheet
const styles = StyleSheet.create({

    container : {
        flex : 1, 
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },
    /*
        flexDirection : 4가지
            row, column, row-reverse, column-reverse
    */
    item1 : {flex : 1, backgroundColor : '#ABCDEF'},
    item2 : {flex : 1, backgroundColor : '#CDEFAB'},
    item3 : {flex : 1, backgroundColor : '#EFABCD'},

    /*
    container : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        alignItems : 'center', // 좌우정렬
        justifyContent : 'center',
    },
    error : {
        padding : 10,
        fontSize : 20,
        fontWeight : '600',
        color : '#FF0000'
    },
    text : {
        padding : 10,
        fontSize : 20,
        fontWeight : '300',
        color : '#333333'
    }
    */
});

export default App;