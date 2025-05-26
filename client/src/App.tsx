import { Suspense, lazy} from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";


const HomePage = lazy(()=> import("./pages/HomePage"))
const ApartmentsPage = lazy(()=> import("./pages/ApartmentsPage"))
const ApartmentIDPage = lazy(()=> import("./pages/ApartmentID"))
const AddApartmentPage = lazy(()=> import("./pages/AddApartmentPage"))

export default function App() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="apartments" element={<ApartmentsPage />} />
        <Route path="apartments/:id" element={<ApartmentIDPage />} />
        <Route path="add-apartment" element={<AddApartmentPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
    </Suspense>
  )
};
