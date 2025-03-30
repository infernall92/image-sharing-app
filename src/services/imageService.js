import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/images";

export default {
  async getAll() {
    const result = await request.get(baseUrl);
    const images = Object.values(result);
    return images;
  },
  upload(imageData) {
    return request.post(baseUrl, imageData);
  },
};
