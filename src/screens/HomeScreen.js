import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen() {
    const {navigation} = props;

    const goToPage = () => {
        navigation.navigate('Settings');
    }
    return (
        <View>
            <Text>Estamos en HomeScreen</Text>

            <Button title="Go to Settings" onPress={goToPage} />
        </View>
    )
}
