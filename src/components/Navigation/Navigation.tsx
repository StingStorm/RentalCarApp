import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Button component={NavLink} to="/">
        Home
      </Button>
      <Button component={NavLink} to="/catalog">
        Catalog
      </Button>
    </Box>
  );
};

export default Navigation;
