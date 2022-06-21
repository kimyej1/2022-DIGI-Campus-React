import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    );
};

export const Footer = () => {
    return(
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        height : 80,
    },

    header : {
        backgroundColor : '#EFABCD',
    },
    
    contents : {
        flex : 1,   // flex : 혼자 차지하는 비중 (이거 안쓰면 height 400이라 조금 모자람.. -> height 보다 flex 값이 우선!)
        backgroundColor : '#CDEFAB',
        height : 400,
    },

    footer : {
        backgroundColor : '#ABCDEF',
        height : 80,
    },

    text : {
        fontSize : 20,
    }
});