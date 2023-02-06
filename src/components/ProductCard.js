import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import styles from './ProductCard.module.scss';

const ProductCard = ({ productProducer }) => {
  const { product_category: productCategory } = productProducer;
  const category = productCategory === 'PESTICIDE' 
    ? 'Defensivo' 
    : 'Orgânico';

  return (
    <Grid>
      <Button href='https://www.youtube.com'>
        <Card className={styles.productCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={"./images/produto.jpg"}
              alt="Imagem"
            />
            <CardContent>
              <div className={styles.productDescription}>
                <Typography
                  variant="h5"
                  align='center'
                  component="div"
                >
                  {productProducer.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Produtor: {productProducer.producer.name}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                  Categoria: {category}
                </Typography>
              </div>
              <div className={styles.productPrice}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                >
                  {productProducer.price}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Button>
    </Grid>
  )
}

export default ProductCard;