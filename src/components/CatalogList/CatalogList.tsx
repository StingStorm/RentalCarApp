import { CatalogItem } from '@/redux/catalog/types';
import CatalogListItem from '../CatalogListItem/CatalogListItem';
import { Grid2 } from '@mui/material';

type CatalogListProps = {
  catalog: CatalogItem[];
};

const CatalogList = ({ catalog }: CatalogListProps) => {
  return (
    <Grid2 container columnSpacing={4} rowSpacing={6}>
      {catalog.map(car => {
        return (
          <Grid2 size={3} key={car.id}>
            <CatalogListItem car={car}></CatalogListItem>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default CatalogList;
