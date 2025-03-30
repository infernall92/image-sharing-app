export const request = async (method, url, data) => {
  let options = {};

  if (method != "GET") {
    options = {
      method,
    };
  }

  if (data) {
    options = {
      ...options,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }

  const response = await fetch(url, options);
  const result = response.json();

  return result;
};
