import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchAllApartments } from "@/redux/apartment/operations";
import { selectApartments } from "@/redux/apartment/selectors";
import { NavLink } from "react-router";

export default function ApartmentsPage() {
    const dispatch = useAppDispatch();
    const apartments = useAppSelector(selectApartments);
    useEffect(() => {
        dispatch(fetchAllApartments());
    }
    , [dispatch]);

    console.log('apartments:', apartments);

    return (
<div className="px-6 md:px-10 ">
    <h1 className="text-4xl font-bold text-neutral mb-4">
          Apartments
        </h1>
        { apartments.length > 0 ? (
            apartments.map((apartment) => (
                <div key={apartment._id} className="bg-base-200 p-4 mb-4 rounded-2xl shadow-xl flex gap-2">
{apartment.photos && apartment.photos.length > 0 && (
  <div className="carousel w-80">
    {apartment.photos.map((photo, index) => {
      const prevIndex = index === 0 ? apartment.photos!.length - 1 : index - 1;
      const nextIndex = index === apartment.photos!.length - 1 ? 0 : index + 1;

      return (
        <div
          key={photo._id || index}
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >
          <img
            src={photo.url}
            className="w-full object-cover rounded-lg"
            alt={`Slide ${index}`}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${prevIndex}`} className="btn btn-circle size-8">❮</a>
            <a href={`#slide${nextIndex}`} className="btn btn-circle size-8">❯</a>
          </div>
        </div>
      );
    })}
  </div>
)}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                    <h2 className="text-xl font-semibold mb-4">{apartment.title}</h2>

                    <div className="badge badge-lg badge-primary  mr-2">Price: ${apartment.price}</div>
                    <div className="badge badge-lg badge-primary">Rooms: {apartment.numberOfRooms}</div>
                    
                    <p className="text-neutral-500 mt-4">{apartment.description}</p>

                    <NavLink to={`/apartments/${apartment._id}`} className="btn btn-outline btn-neutral mt-4">
                        View Details 
                    </NavLink>
            </div>
                    <div className="ml-auto">
                        <p className="text-sm text-neutral-500">Added: {new Date(apartment.createdAt).toLocaleDateString()}</p>
                        <p className="text-sm text-neutral-500">Changed: {new Date(apartment.updatedAt).toLocaleDateString()}</p>
                    </div>
            </div>   
             </div>

            ))
        ) : (
            <p className="text-neutral-500 ">No apartments available</p>
        )
                  
        
        }
      

    </div>


    );
    
};
