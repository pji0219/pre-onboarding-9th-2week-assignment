import { Text, UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

function BasketPage() {
  const cartProducts = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <UnorderedList>
      {cartProducts.map((product) => (
        <CartItem
          key={product.id}
          idx={product.id}
          name={product.name}
          price={product.price}
          productTotalPrice={product.productTotalPrice}
          quantity={product.quantity}
        />
      ))}
      <Text fontSize='18'>총 결제금액: {totalPrice}</Text>
    </UnorderedList>
  );
}

export default BasketPage;
