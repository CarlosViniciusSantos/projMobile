import { View, Text, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Footer(){
    return(
      <View style={styles.footer}>
        <Feather name="home" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <AntDesign name="plus" size={24} color="black" />
        <Ionicons name="car-sport-outline" size={24} color="black" />
        <Feather name="menu" size={24} color="black" />
      </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        padding: 25,
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 50

      }
})