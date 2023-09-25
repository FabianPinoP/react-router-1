import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import NavBarMenu from "./components/NavBarMenu";
function App() {
  return (
    <>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
