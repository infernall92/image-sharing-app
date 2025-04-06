import HeroScreen from "./components/home/HeroScreen";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ImageUpload from "./components/image-upload/ImageUpload";
import ImageEdit from "./components/image-edit/ImageEdit";
import ImageDetails from "./components/image-details/ImageDetails";
import ImageCatalog from "./components/image-catalog/ImageCatalog";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  // const [authData, setAuthData] = useState({});

  // const handleUserLogin = (authData) => {
  //   setAuthData(authData);
  // };

  const userData = useSelector((state) => state.auth);
  console.log(userData);

  return (
    <div className="bg-[#F2EFE7]">
      <Header />
      <Routes>
        <Route path="/" element={<HeroScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/images/:imageId/edit" element={<ImageEdit />} />
        <Route path="/images/:imageId/details" element={<ImageDetails />} />
        <Route path="/images" element={<ImageCatalog />} />
      </Routes>
    </div>
  );
}

export default App;
