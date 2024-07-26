import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./style/fonts.css";
import "./style/global.css";
import Making from "./pages/making";
import Example from "./pages/example";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/making" element={<Making />} />
        <Route path="/example" element={<Example />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
