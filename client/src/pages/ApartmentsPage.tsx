import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchAllApartments } from "@/redux/apartment/operations";
import { selectApartments } from "@/redux/apartment/selectors";

import ApartmentCard from "@/components/ApartmentCard";

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
                <ApartmentCard 
                    key={apartment._id}
                    apartment={apartment} />

            ))
        ) : (
            <p className="text-neutral-500 ">No apartments available</p>
        )
                  
        
        }
      

    </div>


    );
    
};
