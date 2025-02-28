// MA Service Controllers
import * as MaService from '../services/maService.js';

export const getAll = async (req, res) => {
  const data = await MaService.getAll();
  res.json(data);
};


console.log("Hi, This is Demo.")

export const create = async (req, res) => {
  const newData = await MaService.create(req.body);
  res.json(newData);
};
