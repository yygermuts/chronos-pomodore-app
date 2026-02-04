import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import "../../styles/theme.css";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault(); //não segue o href

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      console.log("clicado", Date.now());
      return nextTheme;
    });
  };

  // useEffect(() => {
  //   console.log("useEffect sem dependencia", Date.now());
  // }); //executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("useEffect com array dep vazio", Date.now());
  // }, []); // esse useEffect executa apenas quando
  // // o react monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log("theme mudou", theme, Date.now());
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // executa apenas quando o valor de theme muda

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
