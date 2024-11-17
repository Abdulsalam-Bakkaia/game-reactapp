import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { Container } from "./components/index";
import { Header, Footer } from "./sections/index.js";

import { Home, Profile } from "./Pages/index.js";
import Fortnight from "./Pages/Fortnight/Fortnight.js";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Fortnight" element={<Fortnight />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
