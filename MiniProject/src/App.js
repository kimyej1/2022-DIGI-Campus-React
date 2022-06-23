import React, {useState} from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { theme } from './theme';
import styled, { ThemeProvider } from 'styled-components/native';

import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './Images';
import Task from './components/Task';

// import AsyncStorage from '@react-native-async-storage/async-storage';

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

const List = styled.ScrollView`
    flex : 1;
    width: ${({width}) => width - 40}px;
`;

const App = () => {

    const width = Dimensions.get('window').width;
    /*
        import { useWindowDimensions } from 'react-native';
        const width = useWindowDimensions().width;          이거랑 똑같음
    */

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({      // 초기값을 다시 JSON 타입으로... -> add 했을 때 이 tasks에 넣고, delete하면 지우고 등 해야함!
        // '1' : { id:'1', title:'First Task', completed:false },
        // '2' : { id:'2', title:'Second Task', completed:true },
        // '3' : { id:'3', title:'Third Task', completed:true },
        // '4' : { id:'4', title:'Fourth Task', completed:false },
        // '5' : { id:'5', title:'Fifth Task', completed:false },
    });
    /*
        {
            1 : { },                                             -- 1번 데이터는 { } 이거야,
            2 : { "title" : "hello", "completed" : true },       -- 2번 데이터는 { } 이건데, 타이틀은 헬로우고, 완료되었어
            3 : { },
            4 : { "id" : 4, "title" : "hello", "completed" : true },    -- id가 있어야 지울때, 더할때도 순서 등.. 관리하기가 쉽다!
        }
    */

    const _onChangeText = text => {
        console.log('change!!!', text);
        setNewTask(text);
    };
    const _addTask = () => {
        alert(`Schedule Added : ${newTask}`)  // ` 대신 ", '를 쓰면 $~를 프로그램영역으로 인식을 못함

        const ID = Date.now().toString();
        console.log('ID ', ID);     // 중복값이 없게 하기위해, 현재 시간(ms 포함)을 아이디로 사용하겠다

        const newTaskObject = {
            [ID] : { id : ID, title : newTask, completed : false }     // 리액트에서 key 값은 배열로 사용해야만 접근이 가능하다
        };
        // 얘를 이제 tasks에 넣기만 하면 화면에 보여짐(setTasks 이용!)
        
        setNewTask('');
        setTasks({ ...tasks, ...newTaskObject })    // tasks를 deep copy + newTaskObject
        /*
            test(target, ...source) // 인자가 두개인 것처럼 보이지만, "여러개(몇개가 올지 모름)인데, 처음꺼는 타겟, 그 이후꺼는 다 소스" 라는 의미
        */

        // 근데 메모리에 저장한거라, 껐다 키면 새로 저장한거 사라진다
    };

    const _deleteTask = id => {     // key(id)가 있어야만 지울 수 있음 -> param = id

        // setter 밖에 없으므로, 통째로 deep copy 해서 가져와서, 하나 지운담에 그걸 다시 set 해야함
        const cloneTasks = Object.assign({}, tasks);    // Object.assign(복사를 반영할 객체, 복사할 객체)
        delete cloneTasks[id];
        setTasks(cloneTasks);
        console.log('App , _deleteTask, id = ', id);
    };

    const _toggleTask = id => {
        console.log('App , _toggleTask , id = ' , id);
        const cloneTasks = Object.assign({}, tasks);
        cloneTasks[id]['completed'] = !cloneTasks[id]['completed'];
        setTasks(cloneTasks);
    };

    const _updateTask = item => {
        console.log('App , _updateTask , item.title = ', item.title);
        const cloneTasks = Object.assign({}, tasks);
        cloneTasks[item.id] = item;
        setTasks(cloneTasks);
    };

    const _onBlur = () => {     // 입력창에 입력하다가 포커스아웃 했을 때 다 지우고 + Add Schedule 로 복원해주려는 역할
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
                    onBlur={_onBlur}
                />

                <List width={width}>
                    {
                        Object.values(tasks).reverse().map(item => (
                            <Task 
                                key={item.id} 
                                item={item} 

                                deleteTask={_deleteTask}
                                toggleTask={_toggleTask}
                                updateTask={_updateTask}
                            />
                        ))
                    }

                    {/* <Task title="First Schedule" />
                    <Task title="Second Schedule" />
                    <Task title="Third Schedule" /> */}
                </List>
                
                {/* <IconButton type={images.completed} />
                <IconButton type={images.uncompleted} />
                <IconButton type={images.delete} />
                <IconButton type={images.update} /> */}
            </Container>
        </ThemeProvider>
    );
};

export default App;