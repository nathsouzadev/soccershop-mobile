import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, TextInput, Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import style from '../assets/styles';

const Login = ( { navigation } ) => {

    const [user, setUser] = useState('');

    return(
        <Layout>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text style={style.title}>Login </Text>
                
                <View>
                    <TextInput
                        value={user}
                        onChangeText={(e) => setUser(e)}
                        style={style.input}
                        placeholder='Usuário'
                    />
                    <TextInput style={style.input} placeholder='Senha' secureTextEntry={true}/>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home', {user: user})}
                        style={style.button}
                    >
                        <Text style={style.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Layout>
    )
}

export default Login;
