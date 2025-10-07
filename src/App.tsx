import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Story from "./Pages/Story";
import Contact from "./Pages/Contact";
import Header from "./Component/Header";
import MediaSection from "./Pages/MediaSection";
import Experience from "./Pages/Experience";
function App() {
  return (
    <div className="font-poppins overflow-x-hidden ">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/resume"
          element={<Experience />}
        />
        <Route
          path="/story"
          element={<Story />}
        />

        <Route
          path="/social"
          element={<MediaSection />}
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
