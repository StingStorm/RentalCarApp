import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
};

const NavigationLink = ({ children, to }: Props) => {
  return (
    <Link
      component={NavLink}
      to={to}
      variant="navLink"
      color="inherit"
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
