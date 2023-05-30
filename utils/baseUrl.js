const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    :"https://shopler-q3y4h.ondigitalocean.app"

module.exports = baseUrl;
