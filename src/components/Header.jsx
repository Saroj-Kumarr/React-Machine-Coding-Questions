import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-slate-300 text-slate-800"
          : "bg-slate-800 text-slate-300"
      } `}
    >
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>

      <div className="m-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
