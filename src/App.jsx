import { useState } from "react";
import "./assets/css/App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;