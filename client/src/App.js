import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MoviesList from "./components/MoviesList";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div id="background">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies-list" element={<MoviesList />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
