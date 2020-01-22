import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import { ACTION_TYPE,validate } from '../../../public/constants'
import { Alert } from 'react-native'

export default useLogin =()=>{
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [showSuggestion,setShowSuggestion] = useState(false)
    const [namelist,setNamelist]= useState([])

    const registeredUsers = useSelector(state=>state.registerReducer.registeredUsers)

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const filterList = (text)=>{
        setNamelist(registeredUsers.filter(item=>String(item.name).includes(text)))
        if(namelist && namelist.length> 0)
        {
            setShowSuggestion(true)
            
        }else
        {
            setShowSuggestion(false)
        }
    }

    const onInput=(type,text)=>{
        var actions ={
            ["input_name"]: () => {
                if (validate.name(text)) {
                    setName(text)
                    filterList(text)
                    
                } else if(text === ""){
                    setName("")
                    filterList(text)
                }
            },
            ["input_email"]: () => {
                if(validate.email(text))
                {
                    setEmailError("")
                }else
                {
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

        if(typeof actions[type] !== 'function')
        {
            throw new Error("Invalid Action")
        }

        actions[type]();

    }

    const onLogin=()=>{
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
                type: ACTION_TYPE.LOGIN_START,
                payload: {
                    name,
                    email,
                    password
                }
            })
        }
    }

    const goToRegister=()=>{
        navigation.navigate("Register")
    }

    const onPress=(item)=>{
        setName(item.name)
        setShowSuggestion(false)
    }

    return{
        onInput,
        password,
        name,
        email,
        nameError, passwordError,
        emailError,
        onLogin,
        goToRegister,
        showSuggestion,
        namelist,
        onPress
    }
    
}