import type { RootState } from "../store";

export const selectApartment = (state: RootState) => state.apartment;
export const selectApartments = (state: RootState) =>  state.apartment.apartments;
export const selectSelectedApartment = (state: RootState) =>  state.apartment.selectedApartment;
export const selectLoading = (state: RootState) => state.apartment.loading;
export const selectError = (state: RootState) => state.apartment.error;
