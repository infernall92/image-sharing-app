import { request } from "../utils/requester";

const baseUrl = "http://localhost:3030/jsonstore/images";

export default {
  getAll() {
    return request("GET", baseUrl);
  },
  upload(imageData) {
    return request("POST", baseUrl, imageData);
  },
};
