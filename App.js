import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MealList from './src/screens/MealList';
import MealDetail from './src/screens/MealDetail';

import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Meal" component={MealList} />
            <Stack.Screen name="Detail" component={MealDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
