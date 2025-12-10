
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
        <Stack.Screen 
            name="index" 
            options={{ title: "Início - Pedido" }} 
        />
        <Stack.Screen 
            name="details" 
            options={{ title: "Confirmação" }} 
        />
        </Stack>
    );
}