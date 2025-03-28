import HeroScreen from "./components/HeroScreen";
import Header from "./components/Header";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="bg-[#F2EFE7]">
      <Header />
      <Routes>
        <Route path="/" element={<HeroScreen />} />
      </Routes>
    </div>
  );
}

export default App;
