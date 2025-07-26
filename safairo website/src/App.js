import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./Component/Home";
import Contactus from "./Component/Pages/Contactus";
import Termsandcondition from "./Component/Pages/Terms";
import Cancel from "./Component/Pages/Cancel";
import Privacy from "./Component/Pages/privacy";
import Enquiry from "./Component/Pages/Enquiry";
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacus" element={<Contactus />} />
        <Route path="/termsandcondition" element={<Termsandcondition />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
