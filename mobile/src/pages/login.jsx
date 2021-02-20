import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';

const Login = ( { navigation, route } ) => {

    return(
        <Layout>
            <Text>Login id: {route.params.id}</Text>
            <TouchableOpacity
            style={{
                borderStartColor: '#00bb2d',
                width: 150,
                padding: 5,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#008000",
                borderRadius: 5,
            }}
            title='Produtos' onPress={() => 
            navigation.navigate('Home')}>

                <Text>Home</Text>

            </TouchableOpacity>
        </Layout>
    )
}

export default Login;
