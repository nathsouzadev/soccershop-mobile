import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';

const Home = ( {navigation} ) => {

    return(
        <Layout>
            <Text>HomePage</Text>
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
            navigation.navigate('Produtos')}>

                <Text>Produtos</Text>

            </TouchableOpacity>

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
            title='Login' onPress={() => 
            navigation.navigate('Login', {id: 5})}>

                <Text>Login</Text>

            </TouchableOpacity>
        </Layout>
    )
}

export default Home;
