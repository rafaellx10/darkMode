import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "#000000",
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Bem-vindo ao meu aplicativo!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => console.log("Button Pressed")}
        activeOpacity={0.7}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
          Trocar para tema!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
