import { IconDark, IconLight } from "@/lib/icons";
import { useTheme } from "next-themes";
import { useEffect, useState, type FC } from "react";

const ThemeToggle: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && (
        <button
          role="button"
          className="cursor-pointer"
          onClick={() =>
            currentTheme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {currentTheme === "dark" ? (
            <IconLight className="h-6 w-6" />
          ) : (
            <IconDark className="h-6 w-6" />
          )}
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
