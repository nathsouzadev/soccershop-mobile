import React from 'react';
import { TouchableOpacity, Text, ScrollView} from 'react-native';
import Layout from '../components/Layout';
import Card from '../components/Card';
import products from '../assets/product';
import style from '../assets/styles';

const Produtos = ( {navigation} ) => {

    return(
        <Layout>
            <ScrollView style={{marginTop: 25}}>
                {products.map((item, index) => (
                <Card key={index} name={item.name_product} price={item.price}/>
                ))}
            </ScrollView>
            <TouchableOpacity
                style={style.button}
                title='Home' onPress={() => 
                navigation.navigate('Home')}>

                    <Text>Home</Text>

            </TouchableOpacity>
        </Layout>
    )
}

export default Produtos;
