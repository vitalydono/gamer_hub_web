import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Page from '../layouts/Page.js'
import OnBoardingNavigator from './OnBoardingNavigator'
import Register from '../screens/Register.js'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Page>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="OnBoarding" component={OnBoardingNavigator} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </Page>
  )
}

export default AppNavigator
