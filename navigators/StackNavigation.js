import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../pages/HomePage'
import Breakfast from '../pages/Breakfast'
import Lunch from '../pages/Lunch'
import Dinner from '../pages/Dinner'
import Activities from '../pages/activities'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomePage} options={{ title: 'Home' }} />
      <Stack.Screen name="BreakfastScreen" component={Breakfast} options={{ title: 'Breakfast' }} />
      <Stack.Screen name="LunchScreen" component={Lunch} options={{ title: 'Lunch' }} />
      <Stack.Screen name="DinnerScreen" component={Dinner} options={{ title: 'Dinner' }} />
      <Stack.Screen name="ActivitiesScreen" component={Activities} options={{ title: 'Activities' }} />
    </Stack.Navigator>
  )
}

export default MainStack;