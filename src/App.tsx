import React from "react";
import "./App.css";
import "swiper/css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { Box } from "@mui/material";
import ThemingProvider from "./components/ThemingProvider";

const App: React.FC = () => {
  return (
    <ThemingProvider>
      <Box sx={({ minWidth: "100vw", minHeight: "100vh", height: "100%", bgcolor: "background.default" })}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemingProvider>
  );
}

export default App;
