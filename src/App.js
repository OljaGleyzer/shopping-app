import "./App.css";
import Products from "./views/Products";
import Pdp from "./views/Pdp";
import About from "./views/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="pdp" element={<Pdp />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
