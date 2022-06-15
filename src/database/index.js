import mongoose from "mongoose";

const {connect} = mongoose;

export const conectarDataBase = () => {
  connect("mongodb://localhost:27017/finance_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("MongoDB conectado");
    })
    .catch((err) => {
      console.log(`Erro na conexão com MongoDB: ${err}`);
    });
};
