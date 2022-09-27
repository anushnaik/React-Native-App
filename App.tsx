import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './First'
import Second from './Second';
import Third from './Third';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name=" " component={First} />
        <Stack.Screen name="Country" component={Second} />
        <Stack.Screen name="Weather" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
