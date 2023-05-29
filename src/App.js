import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={home} />
      </Routes>
    </>
  );
}

export default App;
