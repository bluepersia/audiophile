import type { JSX } from "react/jsx-runtime";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";

function App(): JSX.Element {
  const message = "Hello World";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1>{message}</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
