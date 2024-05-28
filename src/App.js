import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { Index } from "./components/pages/Index";
import "../src/components/css/style.css";
import { Header } from "./components/common/Header";
import { Research } from "./components/pages/Research";
import { Study } from "./components/pages/Study";
import { Transfer } from "./components/pages/Transfer";
import { Leadership } from "./components/pages/Leadership";
import { Footer } from "./components/common/Footer";
import { DetailsPages } from "./components/common/DetailsPages";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index path="/" element={<Index />}></Route>
        <Route path="/research" element={<Research />}></Route>
        <Route path="/study" element={<Study />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/leadership" element={<Leadership />}></Route>
        <Route path="/deatilsPages" element={<DetailsPages />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
