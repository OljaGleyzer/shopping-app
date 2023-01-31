import "./App.css";
import ProductList from "./views/Products";
import Pdp from "./views/Pdp";
import About from "./views/About";
import NoMatch from "./views/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Register from "./views/Register";
import { Route, Routes } from "react-router-dom";
import { ProductsContextProvider } from "./store/ProductsContext";
import { AuthContext, AuthContextProvider } from "./store/AuthContext";
import { useEffect } from "react";
import MyProfile from "./views/MyProfile";
import ProtectedRoute from "./roots/ProtectedRoute";
import { app } from "./config/firebaseconfig";

function App() {
  console.log("app ", app);
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <ProductsContextProvider>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/testing" element={<ProductList />} />
            <Route path="/product/:id" element={<Pdp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/myprofile"
              element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ProductsContextProvider>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
