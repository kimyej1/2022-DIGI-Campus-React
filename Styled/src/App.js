import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    align-items : center;
    justify-content : center;
`;

const App = () => {
    return (
        <Container>
            <Button title="React"/>
            <Button title="Native"/>
            <Input borderColor = '#3499dd'/>
            <Input borderColor = '#9a60b5'/>
        </Container>
    );
};

export default App;