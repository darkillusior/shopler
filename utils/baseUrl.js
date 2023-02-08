const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:9001"
   :"https://rich-cyan-pronghorn-wear.cyclic.app"

module.exports = baseUrl;
