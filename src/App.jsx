import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExtraPage from "./pages/ExtraPage";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:slug" element={<ExtraPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
