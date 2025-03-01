// SOMA Service Controllers
import * as SomaService from '../services/somaService.js';

export const getAll = async (req, res) => {
  const data = await SomaService.getAll();
  res.json(data);
};

export const create = async (req, res) => {
  const newData = await SomaService.create(req.body);
  res.status(201).json(newData);
};
