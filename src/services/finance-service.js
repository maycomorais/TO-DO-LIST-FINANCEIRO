import Finance from "../models/finance-model.js";

class FinanceServices {
  // Listar todos
  async listarTodos() {
    const financeMongo = await Finance.find();

    if (financeMongo.length === 0) {
      throw { status: 404, message: "Meta não encontrada" };
    }

    return financeMongo;
  }

  // Listar por ID
  async listarPorId({ id }) {
    const financeSelectioned = await Finance.findById(id);

    if (!financeSelectioned) {
      throw { status: 404, message: "Meta não encontrada" };
    }

    return financeSelectioned;
  }

  // Criar nova Paleta
  async createNewFinance({ descricao, valor, meta }) {
    const newFinance = {
      descricao,
      valor,
      meta,
    };

    try {
      const finance = await Finance.create(newFinance);

      return finance;
    } catch (error) {
      throw error;
    }
  }

  // atualizar
  async refreshFinance({ id, descricao, valor, meta }) {
    const financeRefresh = {
      descricao,
      valor,
      meta,
    };

    try {
      await Finance.updateOne({ _id: id }, financeRefresh);

      const finance = await Finance.findById(id);

      return finance;
    } catch (error) {
      throw error;
    }
  }
  async deleteFinance({ id }) {
    const finance = await Finance.findByIdAndDelete(id);

    return finance;
  }
}

export default FinanceServices;
