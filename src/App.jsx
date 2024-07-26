import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./style/fonts.css";
import "./style/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
