import { catalogSelectors } from '@/redux';
import { AppDispatch, RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

export const useCatalogSelectors = () => {
  const catalogItems = useAppSelector(catalogSelectors.selectCatalogItems);
  const favourites = useAppSelector(catalogSelectors.selectFavourites);
  const filters = useAppSelector(catalogSelectors.selectFilters);
  const isLoading = useAppSelector(catalogSelectors.selectIsLoading);
  const page = useAppSelector(catalogSelectors.selectPage);
  const perPage = useAppSelector(catalogSelectors.selectPerPage);
  const totalPages = useAppSelector(catalogSelectors.selectTotalPages);

  return {
    catalogItems,
    favourites,
    filters,
    isLoading,
    page,
    perPage,
    totalPages,
  };
};
