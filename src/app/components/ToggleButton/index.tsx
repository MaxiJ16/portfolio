import { ThemeProvider } from "styled-components";
import { GlobalStyle, themes } from "../../styles/GlobalStyles";
import { useThemeMode } from "@/app/hooks";
import { MoonIcon } from "../../ui/icons";

export const ToggleButton = () => {
  const [theme, toggleTheme] = useThemeMode();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <MoonIcon onClick={toggleTheme} className={"moon"}></MoonIcon>
    </ThemeProvider>
  );
};
