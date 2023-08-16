import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen1 from '../screens/onBoardingScreens/Screen1.js'
import Screen2 from '../screens/onBoardingScreens/Screens2.js'
import Screen3 from '../screens/onBoardingScreens/Screen3.js'
import Screen4 from '../screens/onBoardingScreens/Screen4.js'
import Screen5 from '../screens/onBoardingScreens/Screen5.js'

const Stack = createNativeStackNavigator()

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      <Stack.Screen name="Screen5" component={Screen5} />
    </Stack.Navigator>
  )
}

export default OnBoardingNavigator
