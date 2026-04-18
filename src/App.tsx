import { BrowserRouter, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { JSX } from "react";
import "./App.css";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <h1>Hello World</h1>
        <p>Lorem ipsum text</p>
        <Routes></Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
