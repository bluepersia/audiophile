import type { JSX } from "react/jsx-runtime";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

function App(): JSX.Element {
  const message = "Hello World";
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
