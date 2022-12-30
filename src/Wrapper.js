import { useTheme } from "./store/Theme";

export default function Wrapper({ children }) {
  const themeContext = useTheme();
  const { theme } = themeContext;
  return <div className={`bg-slate-${theme} h-[100vh]`}>{children}</div>;
}
