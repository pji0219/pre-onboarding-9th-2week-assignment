import { Grid } from '@chakra-ui/react';

import ProductItem from '../components/ProductItem';
import products from '../data/mock_data.json';

function MainPage() {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gridGap={6} padding='5'>
      {products.map((product) => (
        <ProductItem
          key={product.idx}
          idx={product.idx}
          name={product.name}
          image={product.mainImage}
          price={product.price}
          category={product.spaceCategory}
          description={product.description}
          maximum={product.maximumPurchases}
          date={product.registrationDate}
        />
      ))}
    </Grid>
  );
}

export default MainPage;
