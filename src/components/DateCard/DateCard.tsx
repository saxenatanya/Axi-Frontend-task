import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import "../../App.css";
import { DateCardPropTypes } from '../../utils/Types';


export const DateCard:FC<DateCardPropTypes> = ({timeZone,actualTime}) => {
  return (
    <Card  className="TimeItem">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{timeZone}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {actualTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
