import { useAppSelector } from "@/hooks/reduxHooks";
import { selectLoading } from "@/redux/apartment/selectors";
import Loader from "@/components/Loader/Loader";
import ApartmentForm from "@/components/ApartmentForm";

export default function AddApartmentPage() {
  const loading = useAppSelector(selectLoading);

  return (
    <div className="px-6 md:px-10 ">
      <h1 className="text-4xl font-bold text-neutral mb-4">Add Apartment</h1>
      {loading ? <Loader /> : <ApartmentForm />}
    </div>
  );
}
