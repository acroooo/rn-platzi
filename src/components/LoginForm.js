import React from 'react';
import {TextInput, Button, Text, View} from 'react-native'

export default function LoginForm(props) {
  return (
    <View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password"/>
        <Button title="Login" onPress={() => console.log('Login in process...')}/>
    </View>
  );
}