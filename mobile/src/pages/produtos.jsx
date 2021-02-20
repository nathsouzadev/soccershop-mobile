import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import Layout from '../components/Layout'

const Produtos = ( {navigation} ) => {

    return(
        <Layout>
                <Text>Produtos</Text>
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
                    title='Home' onPress={() => 
                    navigation.navigate('Home')}>

                        <Text>Home</Text>

                </TouchableOpacity>
        </Layout>
    )
}

export default Produtos;
