import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { addApartment, Apartment } from "@/types/apartment";

import ImageUpload from "@/components/ImageUpload";
import { useAppDispatch } from "@/hooks/reduxHooks";
import {
  createApartment,
  uploadPhoto,
  updateApartment,
} from "@/redux/apartment/operations";

const schema = yup
  .object({
    title: yup
      .string()
      .required("Title is required")
      .min(2, "Too short")
      .max(90, "Too long"),
    description: yup
      .string()
      .required("Description is required")
      .min(10, "Too short")
      .max(355, "Too long"),
    price: yup
      .number()
      .required("Price is required")
      .min(1, "Price must be at least 1"),
    numberOfRooms: yup
      .number()
      .required("Number of rooms is required")
      .oneOf([1, 2, 3], "Invalid number of rooms"),
  })
  .required();
type ApartmentFormProps = {
  apartment?: Apartment;
  onClose?: () => void;
};

export default function ApartmentForm({
  apartment,
  onClose,
}: ApartmentFormProps) {
  const dispatch = useAppDispatch();
  const [photos, setPhotos] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addApartment>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: addApartment) => {
    try {
      if (apartment?._id) {
        await dispatch(
          updateApartment({ id: apartment._id, apartmentData: data })
        ).unwrap();

        if (photos.length > 0) {
          const formData = new FormData();
          photos.forEach(photo => formData.append("photos", photo));
          await dispatch(uploadPhoto({ id: apartment._id, formData }));
        }

        toast.success("Apartment updated!");
      } else {
        const newApartment = await dispatch(createApartment(data)).unwrap();

        if (photos.length > 0) {
          const formData = new FormData();
          photos.forEach(photo => formData.append("photos", photo));
          await dispatch(uploadPhoto({ id: newApartment._id, formData }));
        }

        toast.success("Apartment successfully added!");
      }

      reset();
      setPhotos([]);
      onClose?.();
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (apartment) {
      reset({
        title: apartment.title,
        description: apartment.description,
        price: apartment.price,
        numberOfRooms: apartment.numberOfRooms,
      });
    }
  }, [apartment, reset]);

  return (
    <div className="bg-base-200 p-4 mb-4 rounded-2xl shadow-xl flex gap-4">
      <div>
        <label className="block mb-1 font-medium">Photo apartment</label>
        <ImageUpload onImagesChange={setPhotos} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
        <div className="mb-2">
          <label className="block mb-1 font-medium">Title apartment</label>
          <input
            {...register("title")}
            className="input input-bordered w-full"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-medium">
            Description apartment
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="textarea textarea-bordered w-full"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="mb-2">
            <label className="block mb-1 font-medium">Price $</label>
            <input
              {...register("price")}
              className="input input-bordered w-full"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Number of rooms:</label>
            <select
              {...register("numberOfRooms")}
              className="select input input-bordered w-full"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            {errors.numberOfRooms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.numberOfRooms.message}
              </p>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-primary ">
          {apartment?._id ? "Update Apartment" : "Add Apartment"}
        </button>
      </form>
    </div>
  );
}
