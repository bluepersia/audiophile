import type { JSX } from "react/jsx-runtime";
import "./App.css";

function App(): JSX.Element {
  const message = "Hello World";
  return (
    <div className="container">
      <h1>{message}</h1>
      <p>Some paragraph of text</p>
    </div>
  );
}

export default App;
