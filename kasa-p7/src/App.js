import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Propos from "./Pages/A_propos/Propos";
import Appartement from "./Pages/Appartement/Appartement";
import Erreur from "./Pages/Erreur/Erreur.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Appartement />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="*" element={<Erreur />} />
        </Routes>
    );
}

export default App;
