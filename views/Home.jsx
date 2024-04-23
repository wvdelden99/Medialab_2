import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from "react-native";

export function Home() {
    return (
        <SafeAreaView className="flex-[1] justify-center items-center">
            <StatusBar style="auto" />

            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}