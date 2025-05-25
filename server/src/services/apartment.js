import Apartment from '../db/models/apartment.js';

export const createApartment = (payload) => Apartment.create(payload);

export const getAllApartment = async () => {
  const data = await Apartment.find();
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
