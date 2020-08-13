import React from "react";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">TO-DO LIST</header>
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
