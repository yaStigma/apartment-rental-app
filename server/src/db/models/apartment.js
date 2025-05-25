import { Schema, model } from 'mongoose';

const apartmentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    numberOfRooms: { type: Number, enum: [1, 2, 3], required: true },
    photos: [
      {
        url: { type: String, required: true },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export default model('Apartment', apartmentSchema);
