import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FinanceSchema = new Schema(
  {
    descricao: { type: String, required: true, unique: true },
    valor: { type: Number, required: true },
    meta: { type: Boolean, required: true },
  },
  {
    versionKey: false,
  }
);

const Finance = model("financas", FinanceSchema);

export default Finance;
