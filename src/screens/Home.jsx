import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-slate-300 text-slate-800"
          : "bg-slate-800 text-slate-300"
      } `}
    >
      Home
    </div>
  );
};

export default Home;
