import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Authenticate } from "./pages/Authenticate";
import { PicksPage } from "./pages/PicksPage";
import { PickDetails } from "./components/PickDetails";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authenticate />} />
        <Route path="/register" element={<Authenticate />} />
        <Route path="/" element={<PicksPage />}/>
        <Route path="/post/:id" element={<PickDetails />}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
