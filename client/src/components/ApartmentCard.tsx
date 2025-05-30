import ImageSlider from "./ImageSlider";
import type { Apartment } from "@/types/apartment";
import { Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { deleteApartment } from "@/redux/apartment/operations";
import { selectLoading } from "@/redux/apartment/selectors";
import toast from "react-hot-toast";
import EditModalApartment from "./EditModalApartment";

interface ApartmentCardProps {
  apartment: Apartment;
}
export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteApartment(id)).unwrap();
      toast.success("Apartment successfully delete!");
    } catch (err) {
      console.error("Error:", err);
      toast.error("Error delete apartment. Please try again.");
    }
  };
  return (
    <div
      key={apartment._id}
      className="bg-base-200 p-4 mb-4 rounded-2xl shadow-xl flex gap-4"
    >
      {apartment.photos && apartment.photos.length > 0 && (
        <ImageSlider photos={apartment.photos} />
      )}

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">{apartment.title}</h2>
          <div className="badge badge-lg badge-primary mr-2">
            Price: ${apartment.price}
          </div>
          <div className="badge badge-lg badge-primary">
            Rooms: {apartment.numberOfRooms}
          </div>
          <p className="text-neutral-500 mt-4">{apartment.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <EditModalApartment apartment={apartment} />
            <button
              type="button"
              onClick={() => handleDelete(apartment._id)}
              className="btn btn-sm btn-ghost btn-error"
              disabled={loading}
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="text-sm text-neutral-500 text-right">
            <p>Added: {new Date(apartment.createdAt).toLocaleDateString()}</p>
            <p>Changed: {new Date(apartment.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
