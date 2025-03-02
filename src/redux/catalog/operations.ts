import api from '@/api/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CatalogItem, Filters } from './types';
import { isAxiosError } from 'axios';

type FetchCatalogResponse = {
  cars: CatalogItem[];
  totalCars: number;
  page: number;
  totalPages: number;
};

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchAll',
  async (
    queryParams: Partial<Filters> & { page: number; perPage: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.get<FetchCatalogResponse>('/cars', {
        params: queryParams,
      });

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return (
          rejectWithValue(error?.response?.data?.message) ?? 'Unknown error'
        );
      }

      return rejectWithValue(error);
    }
  }
);

export const getCarById = createAsyncThunk(
  'catalog/getById',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await api.get<CatalogItem>(`/cars/${id}`);

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return (
          rejectWithValue(error?.response?.data?.message) ?? 'Unknown error'
        );
      }

      return rejectWithValue(error);
    }
  }
);
