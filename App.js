import Home from "./src/Home";
import { ThemeProvider } from "./src/context/theme";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
