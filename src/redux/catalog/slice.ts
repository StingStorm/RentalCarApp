import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogState } from './types';
import { fetchCatalog, getCarById } from './operations';

const initialState: CatalogState = {
  catalog: [],
  favourites: [],
  currentCar: null,
  filters: {
    brand: null,
    rentalPrice: null,
    minMileage: null,
    maxMileage: null,
  },
  page: 1,
  perPage: 12,
  totalPages: 1,
  isLoading: false,
};

const handlePending = (state: CatalogState) => {
  state.isLoading = true;
};

const handleRejected = (state: CatalogState) => {
  state.isLoading = false;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addFavourites: (state, { payload }: PayloadAction<string>) => {
      state.favourites.push(payload);
    },
    removeFavourites: (state, { payload }: PayloadAction<string>) => {
      state.favourites.filter(carId => carId !== payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setTotalPages: (state, { payload }: PayloadAction<number>) => {
      state.totalPages = payload;
    },
    setPerPage: (state, { payload }: PayloadAction<number>) => {
      state.perPage = payload;
    },
    clearCurrCar: state => {
      state.currentCar = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, { payload }) => {
        if (state.page === 1) {
          state.catalog = payload.cars;
        } else {
          state.catalog.push(...payload.cars);
        }
        state.isLoading = false;
      })
      .addCase(fetchCatalog.rejected, handleRejected)
      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.currentCar = payload;
        state.isLoading = false;
      })
      .addCase(getCarById.rejected, handleRejected),
});

export const {
  addFavourites,
  removeFavourites,
  setPage,
  setTotalPages,
  setPerPage,
  clearCurrCar,
} = catalogSlice.actions;

export default catalogSlice.reducer;
