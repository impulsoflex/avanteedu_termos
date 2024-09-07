import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
