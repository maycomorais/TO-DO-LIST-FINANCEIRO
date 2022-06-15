import FinanceServices from "../services/finance-service.js";

const financeServices = new FinanceServices();

class FinanceController {

  async listAll(req, res) {
    try {
      const finance = await financeServices.listAll();

      res.send(finance);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async listById(req, res) {
    try {
      const id = req.params.id;
      const finance = await financeServices.listById({ id });
      res.send(finance);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async createNewFinance(req, res) {
    const { descricao, valor, meta } = req.body;

    try {
      const newFinance = await financeServices.createNewFinance({
        descricao,
        valor,
        meta,
      });

      res.status(201).send(newFinance);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Item já cadastrado');
      }
    }
  };

  async refreshFinance(req, res) {
    const { descricao, valor, meta } = req.body;

    const id = req.params.id;

    try {
      const financeRefresh = await financeServices.refreshFinance({
        id,
        descricao,
        valor,
        meta,
      });

      res.send(financeRefresh);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  async deleteFinance(req, res) {
    const id = req.params.id;

    const finance = await financeServices.deleteFinance({ id });

    res.status(200).send(finance);
  }
}

export default FinanceController;
