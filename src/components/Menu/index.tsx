import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";
import "../../styles/theme.css";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    setTheme(() => {
      event.preventDefault(); //não segue o href
      const nextTheme = theme === "dark" ? "light" : "dark";

      return nextTheme;
    });

    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver o histórico"
        title="Ver o histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href=""
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
};
