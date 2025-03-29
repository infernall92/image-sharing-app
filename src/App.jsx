import HeroScreen from "./components/home/HeroScreen";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ImageUpload from "./components/image-upload/ImageUpload";

function App() {
  return (
    <div className="bg-[#F2EFE7]">
      <Header />
      <Routes>
        <Route path="/" element={<HeroScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/image-upload" element={<ImageUpload />} />
      </Routes>
    </div>
  );
}

export default App;
