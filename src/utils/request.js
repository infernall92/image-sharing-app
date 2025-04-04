export const request = async (method, url, data) => {
  let options = {};

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }

  const response = await fetch(url, options);

  // Defensive parsing
  let result;
  try {
    // Some JSON stores return `null` or empty response with 200
    const text = await response.text();
    result = text ? JSON.parse(text) : null;
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    result = null;
  }

  return result;
};

export default {
  get: request.bind(null, "GET"),
  post: request.bind(null, "POST"),
  put: request.bind(null, "PUT"),
  delete: request.bind(null, "DELETE"),
};
