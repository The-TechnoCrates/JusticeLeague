import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientForm from "./pages/ClientForm";
import EditClient from "./pages/EditClient";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Edit from "./pages/EditLegal";
import Licence from "./pages/submitLicence";
import ClientPage from "./pages/Clintpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/client-form" element={<ClientForm />} />
        <Route path="/profile-lawyer" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-client" element={<EditClient />} />
        <Route path="/licence" element={<Licence />} />
        <Route path="/clientpage" element={<ClientPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
