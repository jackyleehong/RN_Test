import React from 'react'
import { View, Text,StyleSheet, TextInput, SafeAreaView,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import useRegister from '../hooks/use_register'

const Register = () => {

    const { onInput, name, email, password,onRegister,backToLogin,nameError,passwordError,emailError } = useRegister();

    const styles =StyleSheet.create({
        textLabel:{
            marginVertical:10
        },
        textErrorLabel:{
            marginVertical:5,
            color:'#ff0000'
        }

    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <View style={{ flex: 1,justifyContent:'space-evenly',padding:10 }}>
                <View>
                    <Text style={[styles.textLabel]}>Name</Text>
                    <TextInput style={{borderBottomWidth:1,padding:2}} keyboardType="ascii-capable" value={name} onChangeText={(text) => onInput("input_name",text)} />
                    <Text style={[styles.textErrorLabel]}>{nameError}</Text>
                </View>
                <View>
                    <Text style={[styles.textLabel]}>Email</Text>
                    <TextInput style={{borderBottomWidth:1,padding:2}} value={email} onChangeText={(text) => onInput("input_email",text)} />
                    <Text style={[styles.textErrorLabel]}>{emailError}</Text>
                </View>
                <View>
                    <Text style={[styles.textLabel]}>Password</Text>
                    <TextInput style={{borderBottomWidth:1,padding:2}} value={password} onChangeText={(text) => onInput("input_password",text)} />
                    <Text style={[styles.textErrorLabel]}>{passwordError}</Text>
                </View>
            </View>
            <View style={{flex:0.5,justifyContent:"center",alignItems:'center'}}>
            <TouchableOpacity onPress={onRegister} style={{padding:10,backgroundColor:'#0000ff99',width:"50%",borderRadius:30,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:"#ffffff99",fontWeight:'600',fontSize:18}}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={backToLogin} style={{marginVertical:10}}>
                    <Text style={{fontWeight:'bold'}}>Back To Login</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default React.memo(Register)