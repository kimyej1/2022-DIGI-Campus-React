import { StyleSheet } from "react-native";

// export default : 중괄호 없이 불러다 쓸 수 있음(이름도 바꿔서 가져올 수 있음), 하나만 만들 수 있음
// export : 중괄호와 함께 불러다 쓸 수 있음(이름도 정해진대로만), 여러개 만들 수 있음

export const viewStyle = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#CDEFAB',
        alignItems : 'center', // 좌우정렬
        justifyContent : 'center',
    },
});

export const textStyle = StyleSheet.create({
    error : {
        padding : 10,
        fontSize : 20,
        fontWeight : '600',
        color : '#ABCDEF'
    },
    text : {
        padding : 10,
        fontSize : 20,
        fontWeight : '300',
        color : '#000000'
    }
});