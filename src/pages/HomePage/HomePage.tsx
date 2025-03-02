import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

import homeBG1x from '@/assets/img/home/background.jpg';
import homeBG2x from '@/assets/img/home/background@2x.jpg';

const HomePage = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingTop: '436px',
        paddingBottom: '56px',
        backgroundImage: `image-set(url(${homeBG1x}) 1x, url(${homeBG2x}) 2x)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        borderTop: '4px solid transparent',
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ marginBottom: '1rem' }}>
          Find your perfect rental car
        </Typography>
        <Typography variant="h2" sx={{ marginBottom: '2.5rem' }}>
          Reliable and budget-friendly rentals for any journey
        </Typography>
        <Button
          component={Link}
          to="/catalog"
          variant="appButton"
          color="secondary"
        >
          View Catalog
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
