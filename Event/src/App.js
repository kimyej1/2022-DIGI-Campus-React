import React from 'react';
import { Text, View } from 'react-native';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
    return (
        <View> 
            <EventButton />
            <EventInput />
        </View>
    );
};

export default App;