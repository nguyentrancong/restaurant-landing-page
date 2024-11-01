import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
