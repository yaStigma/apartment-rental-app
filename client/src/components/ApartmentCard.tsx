import { NavLink } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import type { Apartment } from "@/types/apartment";

interface ApartmentCardProps {
  apartment: Apartment;
}
export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <div key={apartment._id} className="bg-base-200 p-4 mb-4 rounded-2xl shadow-xl flex gap-4">
      {apartment.photos && apartment.photos.length > 0 && (
      <ImageSlider photos={apartment.photos}  />
      )}

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">{apartment.title}</h2>
          <div className="badge badge-lg badge-primary mr-2">Price: ${apartment.price}</div>
          <div className="badge badge-lg badge-primary">Rooms: {apartment.numberOfRooms}</div>
          <p className="text-neutral-500 mt-4">{apartment.description}</p>
          <NavLink to={`/apartments/${apartment._id}`} className="btn btn-outline btn-neutral mt-4">
            View Details
          </NavLink>
        </div>

        <div className="ml-auto text-right text-sm text-neutral-500 mt-4">
          <p>Added: {new Date(apartment.createdAt).toLocaleDateString()}</p>
          <p>Changed: {new Date(apartment.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}