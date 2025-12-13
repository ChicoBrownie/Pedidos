import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleNavegar = () => {
        if (!nome || !quantidade) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        // 
        router.push({
            pathname: "/details",
            params: { 
                cliente: nome, 
                qtd: quantidade 
            }
        });
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={100}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                
                <View style={styles.container}>
                    {/* */}
                    <Image 
                        source={require('../../assets/pexels-peri-2149976252-35080026.jpg')}
                        style={styles.imagem} 
                    />

                    {/* */}
                    <Text style={styles.titulo}>Faça seu Pedido de Brownie</Text>

                    {/* */}
                    <TextInput
                        style={styles.input}
                        placeholder="Seu nome"
                        value={nome}
                        onChangeText={setNome}
                    />

                    {/* */}
                    <TextInput
                        style={styles.input}
                        placeholder="Quantidade de Brownies"
                        keyboardType="numeric"
                        value={quantidade}
                        onChangeText={setQuantidade}
                    />

                    {/* */}
                    <Button title="Confirmar Pedido" onPress={handleNavegar} color="#8B4513" />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    imagem: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});