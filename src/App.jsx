import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./screens/Home.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="mx-auto w-[800px] border-2 border-gray-200 h-screen">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
