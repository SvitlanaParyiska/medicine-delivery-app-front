import { useSelector } from 'react-redux';
import { selectCartList } from '../../redux/shopsSelectors';
import CartItem from 'components/CartItem';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { CartListBox } from './CartList.styled';

function CartList() {
  const listOfCart = useSelector(selectCartList);

  return (
    <CartListBox>
      <ul>
        {listOfCart.length > 0 ? (
          listOfCart.map(item => <CartItem key={nanoid()} drug={item} />)
        ) : (
          <>
            <p>Your shopping cart is still empty...</p>
            <Link to="/">Back to shopping</Link>
          </>
        )}
      </ul>
    </CartListBox>
  );
}

export default CartList;
