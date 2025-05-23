import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-slate-300 text-slate-800"
          : "bg-slate-800 text-slate-300"
      } `}
    >
      Contact
    </div>
  );
};

export default Contact;
