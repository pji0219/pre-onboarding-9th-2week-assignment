import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-toolkit/cart';

function CartItem({ name, idx, price, productTotalPrice, quantity }) {
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(cartActions.addToCart({ idx }));
  };

  const removeCartHandler = () => {
    dispatch(cartActions.removeFromCart(idx));
  };

  return (
    <>
      <Span>{name}</Span>
      <Span>가격: {price}</Span>
      <Span>수량: {quantity}</Span>
      <Span>합계: {productTotalPrice}</Span>
      <Btn onClick={addCartHandler}>수량 추가</Btn>
      <Btn onClick={removeCartHandler}>수량 감소</Btn>
    </>
  );
}

export default CartItem;

const Btn = styled.button`
  width: 100px;
  height: 50px;
  margin-right: 10px;
  background-color: blueviolet;
`;
const Span = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;
