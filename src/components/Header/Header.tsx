import { Box, Container, Stack } from '@mui/material';
import Navigation from '@/components/Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box component="header" sx={{ borderBottom: '1px solid #f2f4f7' }}>
      <Container>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Stack
            direction="row"
            component={Link}
            to="/"
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '26px',
              paddingBottom: '26px',
            }}
          >
            <svg width="104" height="16">
              <use href="logo.svg#icon-logo"></use>
            </svg>
          </Stack>
          <Navigation />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
