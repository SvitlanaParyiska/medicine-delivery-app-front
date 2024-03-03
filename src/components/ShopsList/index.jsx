import { useSelector } from 'react-redux';
import { ShopsListStyled, ButtonStyled } from './ShopList.styled';
import { selectShopsList } from '../../redux/shopsSelectors';
import { nanoid } from 'nanoid';
import { getDrugs } from '../../redux/shopsOperations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function ShopsList() {
  const shopsListApi = useSelector(selectShopsList);
  const dispatch = useDispatch();
  const [activeShop, setActiveShop] = useState('Drugs 24');

  useEffect(() => {
    dispatch(getDrugs(encodeURIComponent(activeShop)));
  }, [activeShop, dispatch]);

  return (
    <>
      <ShopsListStyled>
        {shopsListApi.length > 0 &&
          shopsListApi.map(item => (
            <li key={nanoid()}>
              <ButtonStyled
                className={activeShop === item ? 'active' : ''}
                onClick={() => setActiveShop(item)}
              >
                {item}
              </ButtonStyled>
            </li>
          ))}
      </ShopsListStyled>
    </>
  );
}

export default ShopsList;
