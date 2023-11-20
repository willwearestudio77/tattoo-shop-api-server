const mongoose = require("mongoose");

const { DB_URL } = process.env;

async function connect() {
  await mongoose.connect(DB_URL);
  console.log("DB Connected");
}

connect().catch((err) => console.log(err));