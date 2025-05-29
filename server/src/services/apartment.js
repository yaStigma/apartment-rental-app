import Apartment from '../db/models/apartment.js';
import { SORT_ORDER } from '../constants/index.js';

export const createApartment = (payload) => Apartment.create(payload);

export const getAllApartment = async ({
  sortOrder = SORT_ORDER.ASC,
  sortBy = 'createdAt',
  priceMin,
  priceMax,
  numberOfRooms,
}) => {
  const filters = {};

  if (priceMin !== undefined || priceMax !== undefined) {
    filters.price = {};
    if (priceMin !== undefined) filters.price.$gte = priceMin;
    if (priceMax !== undefined) filters.price.$lte = priceMax;
  }

  if (numberOfRooms !== undefined) {
    filters.numberOfRooms = numberOfRooms;
  }
  const data = await Apartment.find(filters)
    .sort({ [sortBy]: sortOrder })
    .exec();
  return data;
};

export const getApartmentById = async (_id) => {
  const data = await Apartment.findById(_id);
  return data;
};

export const updateApartment = async (_id, payload, options = {}) => {
  const data = await Apartment.findOneAndUpdate({ _id }, payload, {
    new: true,
    runValidators: true,
    ...options,
  });
  return data;
};

export const deleteApartment = async (_id) => {
  const data = await Apartment.findOneAndDelete({ _id });
  return data;
};

export const uploadPhoto = async (_id, photo, options = {}) => {
  const data = await Apartment.findByIdAndUpdate(
    _id,
    { $push: { photos: photo } },
    {
      new: true,
      runValidators: true,
      ...options,
    },
  );
  return data;
};
