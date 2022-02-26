import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.js";
import LoginForm from "./components/LoginForm/LoginForm.js";
import Timeline from "./components/Timeline/Timeline";
import AddMemoryModal from "./components/AddMemoryModal/AddMemoryModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
