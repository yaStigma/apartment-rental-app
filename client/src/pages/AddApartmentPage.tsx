import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { addApartment } from "@/types/apartment";
import ImageUpload from "@/components/ImageUpload";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { createApartment, uploadPhoto } from "@/redux/apartment/operations";
import { selectLoading } from "@/redux/apartment/selectors";
import Loader from "@/components/Loader/Loader";


const schema = yup.object({
  title: yup.string().required("Title is required").min(2, "Too short").max(90, "Too long"),
    description: yup.string().required("Description is required").min(10, "Too short").max(355, "Too long"),
    price: yup.number().required("Price is required").min(1, "Price must be at least 1"),
    numberOfRooms: yup.number().required("Number of rooms is required").oneOf([1, 2, 3], "Invalid number of rooms"),
  }).required();



export default function AddApartmentPage() {
 const dispatch = useAppDispatch();
  const [photos, setPhotos] = useState<File[]>([]);
const loading = useAppSelector(selectLoading);




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
      const apartment = await dispatch(createApartment(data)).unwrap();

      
      if (photos.length > 0) {
        const formData = new FormData();
        photos.forEach(photo => formData.append("photos", photo));
        await dispatch(uploadPhoto({ id: apartment._id, formData }));
      }

     toast.success("Apartment successfully added!");
 reset(); 
    setPhotos([]);
  } catch (err) {
    console.error("Error:", err);
    toast.error("Error adding apartment. Please try again.");
  }
  };

    return (
         <div className="px-6 md:px-10 ">
    <h1 className="text-4xl font-bold text-neutral mb-4">
          Add Apartment
        </h1>                            {loading ? (
        <Loader/>
      ) : (
                        <div className="bg-base-200 p-4 mb-4 rounded-2xl shadow-xl flex gap-2">

<div>
   <ImageUpload onImagesChange={setPhotos} />
</div>



<form onSubmit={handleSubmit(onSubmit)} className=" w-full">

        <div className="mb-4">
        <label className="block mb-1 font-medium">Title apartment</label>
        <input {...register("title")} className="input input-bordered w-full" />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>    
      <div className="mb-4">
        <label className="block mb-1 font-medium">Description apartment</label>
        <textarea
  id="description"
  {...register("description")}
  className="textarea textarea-bordered w-full"
/>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

<div className="flex flex-col md:flex-row gap-4 mb-4">


<div className="mb-4">
        <label className="block mb-1 font-medium">Price $</label>
        <input {...register("price")} className="input input-bordered w-full" />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
      </div>    
      <div className="mb-4">
        <label className="block mb-1 font-medium">Number of rooms:</label>
        <select {...register("numberOfRooms")}  className="select input input-bordered w-full">
  <option >1</option>
  <option>2</option>
  <option>3</option>
</select>
        {errors.numberOfRooms && <p className="text-red-500 text-sm mt-1">{errors.numberOfRooms.message}</p>}
      </div>    
</div>

      <button type="submit" className="btn btn-primary ">Add Apartment</button>
    </form>
    
                            </div>
 )}
        </div>
    );
    
};
