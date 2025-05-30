import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ApartmentsPage = lazy(() => import("./pages/ApartmentsPage"));
const AddApartmentPage = lazy(() => import("./pages/AddApartmentPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="apartments" element={<ApartmentsPage />} />
            <Route path="add-apartment" element={<AddApartmentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
