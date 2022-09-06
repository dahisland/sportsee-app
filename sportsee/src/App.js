import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" />
        <Route path="/setting" />
        <Route path="/community" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
