const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://waltercordoba2014:LFYb4Ow5AEEbCvbd@cluster0.d5m4qon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db