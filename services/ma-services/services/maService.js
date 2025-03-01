// Business logic for MA service
import MaModel from '../models/maModel.js';

export const getAll = async () => {
  return await MaModel.findAll();
};

export const create = async (data) => {
  if (!data || !data.name) {
    throw new Error('Validation Error: Name is required.');
  }
  return await MaModel.create(data);
};
