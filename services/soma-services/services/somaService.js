// Business logic for SOMA service
import SomaModel from '../models/somaModel.js';

export const getAll = async () => {
  return await SomaModel.findAll();
};

export const create = async (data) => {
  return await SomaModel.create(data);
};
