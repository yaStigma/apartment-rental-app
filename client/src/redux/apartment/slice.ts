import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllApartments,
  fetchApartmentById,
  createApartment,
  updateApartment,
  uploadPhoto,
  deleteApartment,
} from "./operations";
import type { Apartment } from "../../types/apartment";

interface ApartmentState {
  apartments: Apartment[];
  selectedApartment: Apartment | null;
  loading: boolean;
  error: string | null;
}
const initialState: ApartmentState = {
  apartments: [],
  selectedApartment: null,
  loading: false,
  error: null,
};
const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllApartments.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllApartments.fulfilled, (state, action) => {
        state.loading = false;
        state.apartments = action.payload;
      })
      .addCase(fetchAllApartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchApartmentById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApartmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedApartment = action.payload;
      })
      .addCase(fetchApartmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createApartment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApartment.fulfilled, (state, action) => {
        state.loading = false;
        state.apartments.push(action.payload);
      })
      .addCase(createApartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateApartment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateApartment.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.apartments.findIndex(
          apartment => apartment._id === action.payload._id
        );
        if (index !== -1) {
          state.apartments[index] = action.payload;
          if (state.selectedApartment?._id === action.payload._id) {
            state.selectedApartment = action.payload; // Update selected apartment if it matches
          }
        }
      })
      .addCase(updateApartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(uploadPhoto.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.apartments.findIndex(
          apartment => apartment._id === action.payload._id
        );
        if (index !== -1) {
          state.apartments[index] = action.payload;
          if (state.selectedApartment?._id === action.payload._id) {
            state.selectedApartment = action.payload; // Update selected apartment if it matches
          }
        }
      })
      .addCase(uploadPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteApartment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteApartment.fulfilled, (state, action) => {
        state.loading = false;
        state.apartments = state.apartments.filter(
          apartment => apartment._id !== action.payload
        );
        if (state.selectedApartment?._id === action.payload) {
          state.selectedApartment = null;
        }
      })
      .addCase(deleteApartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const apartmentReducer = apartmentSlice.reducer;