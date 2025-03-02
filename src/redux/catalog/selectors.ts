import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCatalogItems = (state: RootState) => state.catalog.catalog;
export const selectFavourites = (state: RootState) => state.catalog.favourites;
export const selectFilters = (state: RootState) => state.catalog.filters;
export const selectIsLoading = (state: RootState) => state.catalog.isLoading;
export const selectPage = (state: RootState) => state.catalog.page;
export const selectPerPage = (state: RootState) => state.catalog.perPage;
export const selectTotalPages = (state: RootState) => state.catalog.totalPages;

export const selectQueryParams = createSelector(
  [selectFilters, selectPage, selectPerPage],
  (filters, page, perPage) => {
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter((_, value) => value === null)
    );

    return {
      activeFilters,
      page,
      perPage,
    };
  }
);
