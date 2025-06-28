import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/theme";

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "#000000",
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
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
        onPress={toggleTheme}
        activeOpacity={0.7}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
          Trocar para tema {isDark ? "claro" : "escuro"}!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
