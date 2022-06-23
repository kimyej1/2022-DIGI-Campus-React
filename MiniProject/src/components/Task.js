import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import Input from './Input';
import IconButton from './IconButton';
import { images } from '../Images';
import { theme } from '../theme';
import propTypes from 'prop-types';

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
    color : ${({theme}) => theme.text};
`;

const Task = ({item, deleteTask}) => {
    console.log('Task , Task , deleteTask = ' + deleteTask);
    return (
        <Container>
            <IconButton type={images.uncompleted} />

            <Contents>{item.title} / {item.id} </Contents>

            <IconButton type={images.update} />
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}/> 
        </Container>
    );
};
// deleteTask 지만 onPress 시 실제로는 _deleteTask 를 수행한다.
// {props.key} = {props.item.id}

Task.propTypes = {
    item: propTypes.object.isRequired,
    deleteTask: propTypes.func.isRequired,
};

export default Task;