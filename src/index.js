import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./resources/GlobalStyle";
import PageNotFound from "./pages/PageNotFound";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Site from "./pages/Site";

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
        <Route path="/" element={<Site />} />
        <Route path="/pdf" />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
