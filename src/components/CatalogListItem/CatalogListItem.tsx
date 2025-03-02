import { CatalogItem } from '@/redux/catalog/types';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

type CatalogListItemProps = {
  car: CatalogItem;
};

const CatalogListItem = ({ car }: CatalogListItemProps) => {
  const splitAddress: string[] | undefined = car?.address.split(',');
  const city: string = car?.address ? splitAddress[1] : 'city';
  const country: string = car?.address ? splitAddress[2] : 'country';
  return (
    <Card
      sx={{
        borderRadius: 3.5,
        boxShadow: 'none',
      }}
    >
      <CardMedia
        component="img"
        height="268"
        image={car?.img || 'https://placehold.co/276x268'}
        alt={`${car?.brand}, ${car?.model}`}
      />
      <CardContent sx={{ padding: '16px 0px 28px' }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', marginBottom: '8px' }}
        >
          <Typography>
            {car?.brand || 'brand'}{' '}
            {
              <Box component="span" sx={{ color: '#3470ff' }}>
                {car?.model || 'model'}
              </Box>
            }
            , {car?.year || '0000'}
          </Typography>
          <Typography>${car?.rentalPrice || '??'}</Typography>
        </Stack>
        <Stack
          direction="row"
          columnGap="6px"
          useFlexGap
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            flexWrap: 'wrap',
            maxWidth: '220px',
            '& .carInfo': {
              fontSize: '12px',
              lineHeight: 1.33,
              color: '#8d929a',
            },
          }}
        >
          <Typography className="carInfo">{city}</Typography>
          <Typography className="carInfo">{country}</Typography>
          <Typography className="carInfo">
            {car?.rentalCompany || 'rentalCompany'}
          </Typography>
          <Typography className="carInfo">{car?.type || 'type'}</Typography>
          <Typography className="carInfo">
            {car?.mileage.toLocaleString('uk-UA') || 'x xxx'} km
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CatalogListItem;
