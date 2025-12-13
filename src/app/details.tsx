import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Details() {
    const router = useRouter();
    // 
    const { cliente, qtd } = useLocalSearchParams();

    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Pedido Recebido!</Text>
        
        <View style={styles.cartao}>
            <Text style={styles.texto}>Cliente: {cliente}</Text>
            <Text style={styles.texto}>Item: Brownie Tradicional</Text>
            <Text style={styles.texto}>Quantidade: {qtd} unidade(s)</Text>
            <Text style={styles.total}>Total a pagar: R$ {Number(qtd) * 5},00</Text>
        </View>

        <Button title="Voltar ao Início" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 30,
    },
    cartao: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 30,
    },
    texto: {
        fontSize: 18,
        marginBottom: 10,
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#8B4513',
    },
});