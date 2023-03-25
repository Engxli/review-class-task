import "./App.css";
import CreatePet from "./components/CreatePet";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PetsList from "./components/PetsList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetsList />} />
        <Route path="/pets/add" element={<CreatePet />} />
      </Routes>
    </>
  );
}

export default App;
