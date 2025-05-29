import {
  createApartment,
  getAllApartment,
  getApartmentById,
  updateApartment,
  uploadPhoto,
  deleteApartment,
} from '../services/apartment.js';
import createHttpError from 'http-errors';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
export const createApartmentController = async (req, res, next) => {
  const data = await createApartment({
    ...req.body,
  });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a new apartment',
    data,
  });
};

export const getAllApartmentController = async (req, res, next) => {
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const { priceMin, priceMax, numberOfRooms } = parseFilterParams(req.query);

  const data = await getAllApartment({
    sortBy,
    sortOrder,
    priceMin,
    priceMax,
    numberOfRooms,
  });
  res.json({
    status: 200,
    massage: 'Successfully found all apartments',
    data,
  });
};

export const getApartmentByIdController = async (req, res, next) => {
  const { _id } = req.params;
  const data = await getApartmentById({ _id });

  if (!data) {
    throw createHttpError(404, 'Apartment not found');
  }
  res.json({
    status: 200,
    message: `Successfully found apartment with id: ${_id}`,
    data,
  });
};

export const updateApartmentController = async (req, res, next) => {
  const { _id } = req.params;
  const updateData = await updateApartment(_id, req.body);

  if (!updateData) {
    throw createHttpError(404, 'Apartment not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched an apartment id: ${_id}`,
    data: updateData,
  });
};

export const deleteApartmentController = async (req, res, next) => {
  const { _id } = req.params;
  const data = await deleteApartment(_id);
  if (!data) {
    throw createHttpError(404, 'Apartment not found');
  }
  res.status(204).send();
};

export const uploadPhotoController = async (req, res, next) => {
  const { _id } = req.params;
  const photos = req.files;
  let uploadedPhotos = [];

  if (photos && photos.length > 0) {
    uploadedPhotos = await Promise.all(
      photos.map(async (photo) => ({
        url: await saveFileToCloudinary(photo),
        createdAt: new Date(),
      })),
    );
  }
  const updateData = await uploadPhoto(_id, uploadedPhotos);

  if (!updateData) {
    throw createHttpError(404, 'Apartment not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched an apartment id: ${_id}`,
    data: updateData,
  });
};
