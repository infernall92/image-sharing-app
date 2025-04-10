import request from "../utils/request";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/images";

export const useAllImages = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    request.get(baseUrl).then(setImages);
  }, []);

  return { images };
};

export const useGetImage = (imageId) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    request.get(`${baseUrl}/${imageId}`).then(setImage);
  }, [imageId]);

  return { image };
};

export const useUploadImage = () => {
  const { request } = useAuth();
  const upload = (imageData) => {
    return request.post(baseUrl, imageData);
  };

  return {
    upload,
  };
};

export const useEditImage = () => {
  const { request } = useAuth();

  const edit = (imageId, imageData) => {
    return request.put(`${baseUrl}/${imageId}`, { ...imageData, _id: imageId });
  };

  return { edit };
};

export const useDeleteImage = () => {
  const { request } = useAuth();

  const deleteImage = (imageId) => {
    return request.delete(`${baseUrl}/${imageId}`);
  };
  return { deleteImage };
};
