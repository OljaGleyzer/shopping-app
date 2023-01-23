import "./App.css";
import Products from "./views/Products";
import Pdp from "./views/Pdp";
import About from "./views/About";
import NoMatch from "./views/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Pdp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
