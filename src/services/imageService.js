const baseUrl = "http://localhost:3030/jsonstore/images";

export default {
  async upload(imageData) {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(imageData),
    });

    const result = await response.json();

    return result;
  },
};
