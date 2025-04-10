import { useSelector } from "react-redux";
import request from "../utils/request";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3030/data/images";

export default {
  async getAll() {
    const result = await request.get(baseUrl);
    const images = Object.values(result);
    return images;
  },
  getImage(imageId) {
    return request.get(`${baseUrl}/${imageId}`);
  },
  upload(imageData) {
    return request.post(baseUrl, imageData);
  },
  edit(imageId, imageData) {
    return request.put(`${baseUrl}/${imageId}`, { ...imageData, _id: imageId });
  },
  delete(imageId) {
    return request.delete(`${baseUrl}/${imageId}`);
  },
};

export const useImages = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    request.get(baseUrl).then(setImages);
  }, []);

  return { images };
};

export const useUploadImage = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const options = {
    headers: {
      "X-Authorization": accessToken,
    },
  };
  const upload = (imageData) => {
    return request.post(baseUrl, imageData, options);
  };

  return {
    upload,
  };
};
