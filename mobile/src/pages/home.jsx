import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import style from '../assets/styles'

const Home = ( { navigation, route } ) => {

    return(
        <Layout>
            <Text style={style.title}>Bem vindo {route.params.user}</Text>
            <TouchableOpacity
            style={ style.button }
            title='Produtos' onPress={() => 
            navigation.navigate('Loja')}>

                <Text style={style.buttonText}>Loja</Text>

            </TouchableOpacity>

            <TouchableOpacity
            style={ style.button }
            title='Sair'
            onPress={() => 
            navigation.navigate('Login')}
            >

                <Text style={style.buttonText}>Sair</Text>

            </TouchableOpacity>
        </Layout>
    )
}

export default Home;
