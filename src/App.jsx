import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Vets from "./components/Vets/Vets";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
        <Vets />
      </main>
    </div>
  );
}

export default App;
