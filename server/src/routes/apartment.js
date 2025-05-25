import { Router } from 'express';
import {
  createApartmentController,
  getAllApartmentController,
  getApartmentByIdController,
  updateApartmentController,
  deleteApartmentController,
  uploadPhotoController,
} from '../controllers/apartment.js';
import apartmentSchema from '../validation/apartment.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { upload } from '../middlewares/multer.js';

const apartmentRouter = Router();

apartmentRouter.post(
  '/',
  validateBody(apartmentSchema),
  ctrlWrapper(createApartmentController),
);
apartmentRouter.get('/', ctrlWrapper(getAllApartmentController));
apartmentRouter.get(
  '/:_id',
  isValidId,
  ctrlWrapper(getApartmentByIdController),
);
apartmentRouter.patch(
  '/:_id',
  isValidId,
  ctrlWrapper(updateApartmentController),
);
apartmentRouter.delete(
  '/:_id',
  isValidId,
  ctrlWrapper(deleteApartmentController),
);
apartmentRouter.patch(
  '/:_id/photos',
  upload.array('photos', 10),
  isValidId,
  ctrlWrapper(uploadPhotoController),
);

export default apartmentRouter;
