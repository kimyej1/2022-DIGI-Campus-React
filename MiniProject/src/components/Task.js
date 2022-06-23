import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import IconButton from './IconButton';
import { images } from '../Images';
import { theme } from '../theme';
import propTypes from 'prop-types';
import Input from './Input';

// icon 네개가 다 세로로 배치되니까, 그걸 둘러싸는 컨테이너 하나를 만들어서 하나로 관리하자!
const Container = styled.View`
    flex-direction : row;
    align-items : center;
    background-color : ${({theme}) => theme.itemBackground};
    border-radius : 10px;
    padding : 5px;
    margin : 3px 0;
`;

const Contents = styled.Text`
    flex : 1;
    font-size : 18px;
    color : ${({theme, completed}) => completed? theme.done : theme.text};
    text-decoration-line : ${({completed}) => completed? 'line-through' : 'none'}
`;

const Task = ({item, deleteTask, toggleTask, updateTask}) => {
    console.log('Task , Task , deleteTask = ' , deleteTask);

    const [isEditing, setIsEditing] = useState(false);  // 같은 입력창을 add, update 같이쓰기 위해서 edit 모드인지 확인 필요
    const [title, setTitle] = useState(item.title);

    const _updateButtonPress = () => {
        setIsEditing(true);     // update 버튼을 누르면, edit 모드로 변경
    };

        // let user = { username : "AAA" };
        // let user_id = { id : 1 };
        // let email = { email : "user@text.com" };

        // user = Object.assign(user,user_id, email);
        // -> {username : "AAA", id : 1, email : "user@text.com"} 이렇게 나옴

    const _onSubmitEditing = () => {
        if(isEditing == true) {     // edit 모드에서만 수행할 수 있는 함수

            // isEditing -> false & tasks에서 해당 항목 수정
            setIsEditing(false);
            const currentTask = Object.assign({}, item, {title});
            updateTask(currentTask);
        }
    };

    const _onBlur = () => {
        if(isEditing == true) {     // edit 모드에서만 수행할 수 있는 함수
            setIsEditing(false);
            setTitle(item.title);
        }
    };

    return isEditing ? (    // edit 모드이면 Input 보여주고, 아니면 container 보여주기
        <Input 
            value = {title}
            onChangeText = { title => setTitle(title)}
            onSubmitEditing = {_onSubmitEditing}
            onBlur={_onBlur}    // App.js의 _onBlur가 아니라, 여기서 따로 만들어주는 _onBlur
        />
    ) : (
        <Container>
            <IconButton 
                type={item.completed ? images.completed : images.uncompleted}   // 보여줄 때, 완료 -> 완료아이콘, 미완료 -> 미완료아이콘
                id={item.id}
                onPressOut={toggleTask}
            />
            <Contents completed={item.completed}>{item.title} / {item.id} </Contents>

            {item.completed || (    // completed 면 수정 버튼 가리기 : item.completed에서 true 걸리면 뒤까지 안보고 넘어간다
                <IconButton 
                type={images.update} 
                id={item.id}
                onPressOut={_updateButtonPress} />
            )}
            
            <IconButton 
                type={images.delete} 
                id={item.id} 
                onPressOut={deleteTask}
            /> 
        </Container>
        // deleteTask 지만 onPress 시 실제로는 _deleteTask 를 수행한다.
        // {props.key} = {props.item.id}
    );

};

Task.propTypes = {
    item: propTypes.object.isRequired,
    deleteTask: propTypes.func.isRequired,
    toggleTask: propTypes.func.isRequired,
    updateTask: propTypes.func.isRequired,
};

export default Task;