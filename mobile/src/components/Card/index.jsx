import React from "react";
import { Text, View, Image, } from "react-native";

import styles from '../../assets/styles';


const Card = ({name, price}) => {

    const formatedPrice = price.toFixed(2)

    return (

    <View style={styles.card}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.info}>
              {name}
          </Text>
          <Text style={styles.info}>
              R$ {formatedPrice}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Card;