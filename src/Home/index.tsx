import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/context/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

import { THEME_COLORS } from "@/utils/theme/colors";

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const themeAnimated = useSharedValue(isDark ? 1 : 0);

  useEffect(() => {
    themeAnimated.value = withTiming(isDark ? 1 : 0, { duration: 800 });
  }, [isDark]);

  const viewAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        themeAnimated.value,
        [0, 1],
        [THEME_COLORS.LIGHT.background, THEME_COLORS.DARK.background]
      ),
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        themeAnimated.value,
        [0, 1],
        [THEME_COLORS.LIGHT.text, THEME_COLORS.DARK.text]
      ),
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        themeAnimated.value,
        [0, 1],
        [THEME_COLORS.LIGHT.flashyButton, THEME_COLORS.DARK.flashyButton]
      ),
    };
  });

  const buttonTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        themeAnimated.value,
        [0, 1],
        [
          THEME_COLORS.LIGHT.textFlashyButton,
          THEME_COLORS.DARK.textFlashyButton,
        ]
      ),
    };
  });

  return (
    <Animated.View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        viewAnimatedStyle,
      ]}
    >
      <Animated.Text
        style={[
          {
            color: "#000000",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
            textAlign: "center",
          },
          textAnimatedStyle,
        ]}
      >
        Bem-vindo ao meu aplicativo!
      </Animated.Text>
      <AnimatedButton
        style={[
          {
            backgroundColor: "#000",
            padding: 10,
            borderRadius: 5,
          },
          buttonAnimatedStyle,
        ]}
        onPress={toggleTheme}
        activeOpacity={0.7}
      >
        <Animated.Text
          style={[{ color: "#FFFFFF", fontSize: 16 }, buttonTextAnimatedStyle]}
        >
          Trocar para tema {isDark ? "claro" : "escuro"}!
        </Animated.Text>
      </AnimatedButton>
    </Animated.View>
  );
}
