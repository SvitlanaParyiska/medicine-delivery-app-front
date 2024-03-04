import { useDispatch } from 'react-redux';
import { deleteDrug, downTotal, upTotal } from '../../redux/shopsSlice';
import defaultPicture from '../../images/placeholder2.jpg';
import { CartLi, ButtonStyled, SvgFavAdd } from './CartItem.styled';
import sprite from '../../images/sprite.svg';

function CartItem({ drug }) {
  const dispatch = useDispatch();

  function totalChangeUp() {
    dispatch(upTotal(drug));
  }
  function totalChangeDown() {
    dispatch(downTotal(drug));
  }

  function deleteFromCart() {
    dispatch(deleteDrug(drug));
  }

  return (
    <CartLi>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={drug.imgURL ? drug.imgURL : defaultPicture}
              className="card-img"
              alt="..."
              style={{ width: '250px' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{drug.drugName}</h5>
              <p className="card-text">amount: {drug.price * drug.total} UAH</p>
              <div
                className="mb-3"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <p
                  style={{
                    border: '2px solid #262f34',
                    borderRadius: '4px',
                    padding: '5px 10px',
                  }}
                >
                  {drug.total}
                </p>
                <div>
                  <ButtonStyled type="button" onClick={totalChangeUp}>
                    <SvgFavAdd>
                      <use href={`${sprite}#icon-arrow-up-square`}></use>
                    </SvgFavAdd>
                  </ButtonStyled>
                  <ButtonStyled type="button" onClick={totalChangeDown}>
                    <SvgFavAdd>
                      <use href={`${sprite}#icon-arrow-down-square`}></use>
                    </SvgFavAdd>
                  </ButtonStyled>
                </div>
                <button
                  type="button"
                  onClick={deleteFromCart}
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    marginLeft: 'auto',
                  }}
                >
                  <SvgFavAdd>
                    <use href={`${sprite}#icon-cart-x`}></use>
                  </SvgFavAdd>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartLi>
  );
}

export default CartItem;
