import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import FindWorkers from "./pages/user/FindWorkers";
import Footer from "./components/common/Footer";
import ForContractors from "./pages/user/ForContractors";
import MaterialsSection from "./pages/user/MaterialsSection";
import AboutUs from "./pages/user/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER */}
        <Route path="/find-workers" element={<FindWorkers />} />
        <Route path="/contractors" element={<ForContractors />} />
        <Route path="/materials" element={<MaterialsSection />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
