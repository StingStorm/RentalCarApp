import { Box, Container } from '@mui/material';
import Navigation from '@/components/Navigation/Navigation';

const Header = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p>Logo</p>
        <Navigation />
      </Box>
    </Container>
  );
};

export default Header;
