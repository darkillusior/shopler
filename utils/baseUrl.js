const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:9001"
   :"https://pink-plain-cockroach.cyclic.app"

module.exports = baseUrl;
