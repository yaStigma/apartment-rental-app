import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { addApartment, Apartment, ApartmentFilters } from '../../types/apartment';

axios.defaults.baseURL = 'http://localhost:3000/';

export const fetchAllApartments = createAsyncThunk<Apartment[], ApartmentFilters | undefined>(
  'apartments/fetch',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('apartment', {params});
      console.log('objects:', data);
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchApartmentById = createAsyncThunk(
  'apartments/fetchById',
  async (id: string, { rejectWithValue }) => {
     try {
    const { data } = await axios.get(`apartment/${id}`);
    return data.data;
  } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const createApartment = createAsyncThunk(
  'apartments/create',
  async (apartmentData: addApartment, { rejectWithValue }) => {
     try {
    const {data} = await axios.post('apartment', apartmentData);
    return data.data;
        }   catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const updateApartment = createAsyncThunk(
  'apartments/update',
  async (
    { id, apartmentData }: { id: string; apartmentData: addApartment },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(`apartment/${id}`, apartmentData);
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

export const uploadPhoto = createAsyncThunk(
  'apartments/uploadPhotos',
  async (
    { id, formData }: { id: string; formData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(`apartment/${id}/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);



export const deleteApartment = createAsyncThunk(
  'apartments/delete',
  async (id: string, { rejectWithValue }) => {
    try {
    await axios.delete(`apartment/${id}`);
    return id; 
    }   catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);