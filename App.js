import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import BuscasScreen from './screens/Buscas';
import InfoScreen from './screens/Info';

const Stack = createStackNavigator ()

  function App  (){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{
          headrShown: false
        }}>
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "Buscas" component = {BuscasScreen}/>
          <Stack.Screen name = "Info" component = {InfoScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default App ()
