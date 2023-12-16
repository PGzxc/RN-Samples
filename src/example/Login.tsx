import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
import * as Utils from '../utils/Utils'


export default function Login() {
    const [userName, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [repassword, onChangeRepassword] = React.useState('');
    const [isRegister, onChangeRegister] = React.useState(false);

    const login = (userName: string, password: string) => {
        if (Utils.isEmpty(userName) || Utils.isEmpty(password)) return
        console.log("login===>", userName, password)
    }
    const register = (userName: string, password: string, repassword) => {
        if (Utils.isEmpty(userName) || Utils.isEmpty(password) || Utils.isEmpty(repassword)) return
        console.log("register===>", userName, password, repassword)
    }

    return (
        <View style={styles.container}>

            <View style={{alignItems: "center", justifyContent: "center", marginBottom: 50}}>
                <Image
                    style={{width: 50, height: 50, alignItems: "center", justifyContent: "center"}}
                    source={require('../images/ic_logo.png')}/>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>{!isRegister ? "登录界面" : "注册界面"}</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    color: 'gray'
                }}>{!isRegister ? "登录账号以使用更多功能" : "注册账号以使用更多功能"}</Text>
            </View>

            <TextInput style={styles.input}
                       underlineColorAndroid="transparent"
                       placeholder="用户名"
                       placeholderTextColor="#9a73ef"
                       autoCapitalize="none"
                       value={userName}
                       onChangeText={text => onChangeUserName(text)}/>

            <TextInput style={styles.input}
                       underlineColorAndroid="transparent"
                       placeholder="密码"
                       placeholderTextColor="#9a73ef"
                       autoCapitalize="none"
                       value={password}
                       secureTextEntry={true}
                       onChangeText={text => onChangePassword(text)}/>

            {
                isRegister && <TextInput style={styles.input}
                                         underlineColorAndroid="transparent"
                                         placeholder="确认密码"
                                         placeholderTextColor="#9a73ef"
                                         autoCapitalize="none"
                                         value={repassword}
                                         secureTextEntry={true}
                                         onChangeText={text => onChangeRepassword(text)}/>
            }
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => !isRegister ? login(userName, password) : register(userName, password, repassword)}>
                <Text style={styles.submitButtonText}> {!isRegister ? "登录" : "注册"} </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{alignItems: "center", justifyContent: "center", marginBottom: 50}}
                onPress={() => {
                    onChangeRegister(!isRegister)
                    onChangeUserName("")
                    onChangePassword("")
                    onChangeRepassword("")
                }}>
                <Text style={{
                    color: "blue",
                    justifyContent: "center",
                    alignItems: "center"
                }}> {!isRegister ? "没有账号，去注册" : "已有账号，去登陆"} </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
    },
    input: {
        margin: 15,
        height: 40,
        padding: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 5
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white',
        textAlign: "center"
    }
})
