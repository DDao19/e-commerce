import React from 'react';
import Product from './Product/Product';

import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'


const Products = ({ products, onAddToCart }) => {
  const classes = useStyles()
  
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h2">Shop Now!</Typography>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}


export default Products