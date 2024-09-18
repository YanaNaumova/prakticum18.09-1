import { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import ExpensiveComputationComponent from "./components/ExpensiveComputationComponent";
import ParentComponent from "./components/ParentComponent";
import ParentComponentItem from "./components/ParentComponentItem";
import ParentComplexCalculationComponent from "./components/ComplexCalculationComponent";

function App() {
  const [theme, setTheme] = useState(true);
  function changeTheme() {
    setTheme(!theme);
  }

  return (
    // <ThemeContext.Provider value={{ theme, changeTheme }}>
    //   <div className="App">
    //     <ThemeComponent />
    //   </div>
    // </ThemeContext.Provider>
    // <div>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </div>
    <>
      {/* <ExpensiveComputationComponent /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponentItem /> */}
      <ParentComplexCalculationComponent />
    </>
  );
}

export default App;
