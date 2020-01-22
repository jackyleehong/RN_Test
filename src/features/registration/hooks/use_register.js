import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, NavigationNativeContainer } from '@react-navigation/native'
import { useWindowDimensions, Alert } from 'react-native'
import { ACTION_TYPE, validate } from '../../../public/constants'


export default useRegister = () => {

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const users = useSelector(state => state.registerReducer.registeredUsers)



    const onInput = (type, text) => {
        var actions = {
            ["input_name"]: () => {
                if (validate.name(text)) {
                    setName(text)
                } else if(text === "") {
                    setName(text)
                }
            },
            ["input_email"]: () => {
                if (validate.email(text)) {
                    setEmailError("")
                } else {
                    setEmailError("Invalid email")
                }

                setEmail(text)
            },
            ["input_password"]: () => {
                if (validate.password(text)) {
                    setPassword(text)
                } else if(text === "") {
                    setPassword("")
                }

            },

        }

        if (typeof actions[type] !== 'function') {
            throw new Error("Invalid Action")
        }

        actions[type]();

    }

    const onRegister = () => {
        if (!validate.name(name)) {
            setNameError("Invalid Username")
        }
        if (!validate.email(email)) {
            setEmailError("Invalid Email")
        }
        if (!validate.password(password)) {
            setPasswordError("Invalid Password")
        }
        if (!(emailError || nameError || passwordError)) {
            dispatch({
                type: ACTION_TYPE.REGISTER_SUCCESS,
                payload: {
                    users: [
                        ...users,
                        {
                            name,
                            email,
                            password
                        }
                    ]
                }
            })
            setTimeout(()=>{
                Alert.alert("Notice","Register Success")
            },500)
        }

    }

    const backToLogin = () => {
        navigation.goBack();
    }


    return {
        onInput,
        name,
        password,
        email,
        nameError, passwordError,
        emailError,
        onRegister,
        backToLogin
    }

}