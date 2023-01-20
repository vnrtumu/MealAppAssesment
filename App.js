import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MealList from './src/screens/MealList';
import MealDetail from './src/screens/MealDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Meal" component={MealList} />
        <Stack.Screen name="Detail" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
