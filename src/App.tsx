import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Component/Header";
function App() {
  return (
    <div className="font-poppins overflow-x-hidden">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}

export default App;
