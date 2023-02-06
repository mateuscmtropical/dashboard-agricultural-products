import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import styles from './ProducerCard.module.scss';

export default function ProducerCard({ producer }) {
  return (
    <Button href='https://www.youtube.com'>
      <Card className={styles.producerCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"./images/produtor.jpeg"}
            alt="green iguana"
          />
          <CardContent>
            <div className={styles.producerDescription}>
              <Typography 
                variant="h5" 
                component="div"
                >
                {producer.name}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Button>
  );
}