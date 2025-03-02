import { Stack } from '@mui/material';
import NavigationLink from '../ui/NavigationLink';

const Navigation = () => {
  return (
    <Stack direction="row" spacing={4} useFlexGap>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
    </Stack>
  );
};

export default Navigation;
