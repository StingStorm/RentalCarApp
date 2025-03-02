export type CatalogItem = {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
};

export type Filters = {
  brand: string | null;
  rentalPrice: string | null;
  minMileage: string | null;
  maxMileage: string | null;
};

export type CatalogState = {
  catalog: CatalogItem[];
  favourites: string[];
  currentCar: CatalogItem | null;
  filters: Filters;
  page: number;
  perPage: number;
  totalPages: number;
  isLoading: boolean;
};
