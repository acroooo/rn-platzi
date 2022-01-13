import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';

export default function App() {
  return (

    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
