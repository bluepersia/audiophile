import { BrowserRouter, Routes } from "react-router-dom";
import type { JSX } from "react";
import "./App.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <h1>Hello World</h1>
      <p>Lorem ipsum text</p>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
