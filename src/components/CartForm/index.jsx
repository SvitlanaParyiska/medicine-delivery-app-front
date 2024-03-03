import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/shopsOperations';
import CartList from 'components/CartList';
import {
  FormBoxStyled,
  InputsBoxStyled,
  ButtonBox,
  ClearButton,
} from './CartForm.styled';
import { selectCartList } from '../../redux/shopsSelectors';
import { useEffect, useState } from 'react';
import { totalAmount } from 'helpers/cartHelper';
import Notiflix from 'notiflix';
import { clearCart } from '../../redux/shopsSlice';

function CartForm() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const listOfCart = useSelector(selectCartList);

  useEffect(() => {
    if (listOfCart.length > 0) {
      const totalCulc = totalAmount(listOfCart);
      setTotal(totalCulc);
    } else {
      setTotal(0);
    }
  }, [listOfCart]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, phone, address } = e.target.elements;

    try {
      await dispatch(
        addCart({
          drugsList: listOfCart,
          totalPrice: total,
          name: name.value,
          email: email.value,
          phone: Number(phone.value),
          address: address.value,
        })
      ).unwrap();
      Notiflix.Notify.success('Done!', {
        timeout: 2000,
      });
      e.target.reset();
    } catch (e) {
      Notiflix.Notify.failure('Fill in correct data!', {
        timeout: 2000,
      });
    }
  };

  function clearTotalCart() {
    dispatch(clearCart());
  }
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormBoxStyled>
          <InputsBoxStyled>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Username:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="inputName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">
                Phone:
              </label>
              <input
                type="number"
                name="phone"
                className="form-control"
                id="inputPhone"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address:
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                id="inputAddress"
                required
              ></input>
            </div>
          </InputsBoxStyled>
          <CartList />
        </FormBoxStyled>
        <ButtonBox>
          <p>Total price: {total} UAH</p>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </ButtonBox>
      </form>
      <ClearButton
        type="button"
        className="btn btn-danger"
        onClick={clearTotalCart}
      >
        Clear cart
      </ClearButton>
    </div>
  );
}

export default CartForm;
