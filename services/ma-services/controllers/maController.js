// MA Service Controllers
import * as MaService from '../services/maService.js';

export const getAll = async (req, res) => {
  const data = await MaService.getAll();
  res.json(data);
};

export const create = async (req, res) => {
  const newData = await MaService.create(req.body);
  res.json(newData);
};
