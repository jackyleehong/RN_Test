import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../features/login/components/login'
import Register from '../features/registration/components/register'

const Stack = createStackNavigator();

export default App =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register"component={Register}/>
        </Stack.Navigator>
    )
}