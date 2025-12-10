import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function index() {
    return (
        <View style={styles.container}>
            <Text>Página USUÁRIO</Text>
            <Link href={"/profile"}>Ir para tela Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
