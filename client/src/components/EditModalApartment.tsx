import { useState } from "react";
import ApartmentForm from "./ApartmentForm";
import type { Apartment } from "@/types/apartment";
import { Pencil } from "lucide-react";
interface EditModalApartmentProps {
  apartment: Apartment;
}
export default function EditModalApartment({
  apartment,
}: EditModalApartmentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <>
      <button
        onClick={handleOpen}
        className="btn btn-sm btn-ghost btn-primary"
        title="Edit"
      >
        <Pencil size={18} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-base-100 p-6 rounded-xl shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 btn btn-sm btn-circle"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Apartment</h2>

            <ApartmentForm apartment={apartment} onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}
