import React from 'react'
import {NavigationNativeContainer} from '@react-navigation/native'
import AuthorizationNavigator from './navigation/authorization_navigator'
import {Provider} from 'react-redux'
import store from './store'


export default App=()=>{
    return(
        <NavigationNativeContainer>
            <Provider store={store}>
            <AuthorizationNavigator/>
            </Provider>
        </NavigationNativeContainer>
    )
}