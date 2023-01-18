import "./App.css";
import Products from "./views/Products";
import Pdp from "./views/Pdp";
import About from "./views/About";
import NoMatch from "./views/NoMatch";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Pdp />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
