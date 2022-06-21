import { Routes, Route, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Features from "./pages/Features/Features";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
