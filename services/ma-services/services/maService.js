// Business logic for MA service
import MaModel from '../models/maModel.js';

export const getAll = async () => {
  return await MaModel.findAll();
};

export const create = async (data) => {
  return await MaModel.create(data);
};
