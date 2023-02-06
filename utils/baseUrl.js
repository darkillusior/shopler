const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:9001"
   :"https://lively-cow-polo-shirt.cyclic.app/"

module.exports = baseUrl;
