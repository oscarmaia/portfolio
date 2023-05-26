import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "./pages/Hello";
import GlobalStyle from "./resources/GlobalStyle";
import PageNotFound from "./pages/PageNotFound";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Page2 from "./pages/Page2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

function App() {
  const theme = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
