import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
