import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid } from '@mui/material';
import styles from './BannerCard.module.scss';

const BannerCard = ({ image }) => {
  return (
    <Grid>
      <Button href='https://www.youtube.com'>
        <Card>
            <CardMedia
              alt="Imagem"
              image={image}
              component="img"
            />
        </Card>
      </Button>
    </Grid>
  )
}

export default BannerCard;