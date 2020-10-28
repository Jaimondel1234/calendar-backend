const mongoose = require("mongoose");

const dbConnection = async () => {
  console.log(process.env.DB_CN);
  try {
    await mongoose.connect(process.env.DB_CN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al hora de inicializar base de datos");
  }
};

module.exports = { dbConnection };
