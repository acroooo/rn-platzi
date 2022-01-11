import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SettingsScreen() {

    const {navigation} = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
    return (
        <View>
            <Text>Estamos en SettingsScreen</Text>
            <Button title="Go to Home" onPress={() => goToPage('Home')} />
        </View>
    )
}
