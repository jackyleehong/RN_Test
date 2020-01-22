import React from 'react'
import {View,Text,TextInput,StyleSheet,SafeAreaView,TouchableOpacity,KeyboardAvoidingView,TouchableHighlight} from 'react-native'
import useLogin from '../hooks/use_login'
import { ScrollView } from 'react-native-gesture-handler';


const Login =()=>{

    const {namelist,onInput,name,email,onPress,password,onLogin,goToRegister ,showSuggestion,nameError, passwordError,
        emailError,} = useLogin();


    const styles =StyleSheet.create({
        textLabel:{
            marginVertical:10
        },
        textErrorLabel:{
            marginVertical:5,
            color:'#ff0000'
        }

    })

    return(
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <View style={{flex:1,padding:10,justifyContent:'flex-end'}}>
            <View style={{margin:10}}>
                    <Text style={[styles.textLabel]}>Name</Text>
                    <TextInput style={{borderBottomWidth:1,padding:2}} keyboardType="ascii-capable" value={name} onChangeText={(text) => onInput("input_name",text)} />
                    <Text style={[styles.textErrorLabel]}>{nameError}</Text>
                   { showSuggestion &&<ScrollView style={{backgroundColor:'white',width:"100%",paddingVertical:5}}>
                    {
                        namelist.map((item,index)=>{
                            return(
                                <TouchableHighlight key={String(index)} style={{padding:5}} underlayColor="#FFFF0055" onPress={()=>onPress(item)}>
                                <Text>{item.name}</Text>
                                </TouchableHighlight>
                            )
                        })
                    }
                    </ScrollView>}
                </View>
                <View style={{margin:10}}>
                    <Text style={styles.textLabel}>Email</Text>
                    <TextInput style={{borderBottomWidth:1,padding:2}} value={email} onChangeText={(text)=>onInput("input_email",text)}/>
                    <Text style={[styles.textErrorLabel]}>{emailError}</Text>
                </View>
                <View style={{margin:10}}>
                    <Text style={styles.textLabel}>Password</Text>
                    <TextInput style={{borderBottomWidth:1,padding:2}} value={password} onChangeText={(text)=>onInput("input_password",text)}/>
                    <Text style={[styles.textErrorLabel]}>{passwordError}</Text>
                </View>
            </View>
            <View style={{flex:0.5,justifyContent:"center",alignItems:'center'}}>
                <TouchableOpacity onPress={onLogin} style={{padding:10,backgroundColor:'#0000ff22',width:"50%",borderRadius:30,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToRegister} style={{marginVertical:10}}>
                    <Text style={{fontWeight:'bold'}}>Register</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
       
    )
}

export default React.memo(Login)