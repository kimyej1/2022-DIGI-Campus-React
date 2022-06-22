import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { theme } from './theme';
import styled, { ThemeProvider } from 'styled-components/native';

import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './Images';
import Task from './components/Task';

// SafeAreaView : 노치 영역을 위해 뷰에 여백을 만들어준다.
const Container = styled.SafeAreaView`  
    flex : 1;
    background_color : ${({theme}) => theme.background};
    align-items : center;
    justify-content : flex-start;
`;

// const Container = styled.View`
//     flex : 1;
//     background_color : ${({theme}) => theme.background};
//     align-item : center;
//     justify-content : flex-start;
// `;

const Title = styled.Text`
    font-size : 30px;
    font-weight : 600;
    color : ${({theme}) => theme.main};
    align-self: flex-start;
    margin : 20px;
`;

const App = () => {

    const [newTask, setNewTask] = useState('');
    const _onChangeText = text => {
        console.log('change!!!', text);
        setNewTask(text);
    };
    const _addTask = () => {
        alert(`Schedule Added : ${newTask}`)  // ` 대신 ", '를 쓰면 $~를 프로그램영역으로 인식을 못함
        setNewTask('');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>

                {/* 상단바 속성 변경 (bg색상은 안드로이드만 됨) */}
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={theme.background}
                />

                <Title>My Schedule</Title>
                <Input 
                    placeholder="+ Add Schedule"
                    value={newTask}
                    onChangeText={_onChangeText}
                    onSubmitEditing={_addTask}
                />

                <Task title="First Schedule" />
                <Task title="Second Schedule" />
                <Task title="Third Schedule" />

                {/* <IconButton type={images.completed} />
                <IconButton type={images.uncompleted} />
                <IconButton type={images.delete} />
                <IconButton type={images.update} /> */}
            </Container>
        </ThemeProvider>
    );
};

export default App;