import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
