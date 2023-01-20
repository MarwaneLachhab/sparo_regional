import Card from "./Components/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dakhla from "./Components/Dakhla";
import Rabat from "./Components/Rabat";
import Tanger from "./Components/Tanger";
import Marrakech from "./Components/Marrakech";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/4" element={<Dakhla />} />
          <Route path="/3" element={<Marrakech />} />
          <Route path="/1" element={<Rabat />} />
          <Route path="/2" element={<Tanger />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
