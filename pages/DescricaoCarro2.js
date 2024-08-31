import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';

export default function DescricaoCarro2 () {
    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Vender Carro" />
            
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Terceira Etapa</Text>
                <Text style={styles.subtitle}>Adicione Fotos do Carro</Text>

                <TouchableOpacity style={styles.button} onPress={() => {/* Navegação para próxima etapa */}}>
                    <Text style={styles.buttonText}>Publicar Carro</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        backgroundColor: '#f7f7f7',
        elevation: 10,
        borderWidth: 1
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'red',
        paddingTop:30
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 100,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
      
});
