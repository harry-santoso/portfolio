import React from "react";
import Home from "./routes/Home.js";
import Contact from "./routes/Contact.js";
import About from "./routes/About.js";
import Project from "./routes/Project.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
