import CatalogList from '@/components/CatalogList/CatalogList';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useAppDispatch, useCatalogSelectors } from '@/hooks/reduxHooks';
import { catalogOperations } from '@/redux';
import { Box, Button, Container } from '@mui/material';
import { useEffect } from 'react';

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { catalogItems, queryParams } = useCatalogSelectors();

  useEffect(() => {
    dispatch(catalogOperations.fetchCatalog(queryParams));
  }, [dispatch, queryParams]);
  return (
    <Box
      component="section"
      sx={{
        paddingTop: '84px',
        paddingBottom: '124px',
      }}
    >
      <Container>
        <SearchBar />
        {catalogItems.length > 0 && <CatalogList catalog={catalogItems} />}
        <Button>Load More</Button>
      </Container>
    </Box>
  );
};

export default CatalogPage;
