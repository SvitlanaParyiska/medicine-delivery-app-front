import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite, upTotal } from '../../redux/shopsSlice';
import defaultPicture from '../../images/placeholder.jpg';
import Notiflix from 'notiflix';
import { BtnFav, DrugItem, SvgFav, SvgFavAdd } from './DrugsItem.styled';
import { selectFavoritesDrugs } from '../../redux/shopsSelectors';
import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';

function DrugsItem({ drug }) {
  const dispatch = useDispatch();
  const favoritesArray = useSelector(selectFavoritesDrugs);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = () => {
    dispatch(upTotal(drug));
    Notiflix.Notify.success('Added to cart successful!', {
      timeout: 2000,
    });
  };

  useEffect(() => {
    if (favoritesArray.some(item => item.drugName === drug.drugName)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [drug.drugName, favoritesArray]);

  const handleFav = () => {
    if (isFavorite) {
      console.log(drug._id);
      dispatch(deleteFavorite(drug._id));
      Notiflix.Notify.success('Drug was successful deleted!', {
        timeout: 2000,
      });
    } else {
      dispatch(addFavorite(drug));
      Notiflix.Notify.success('Drug was successful added!', {
        timeout: 2000,
      });
    }
  };

  return (
    <DrugItem>
      <div className="card" style={{ width: '18rem', position: 'relative' }}>
        <img
          src={drug.imgURL ? drug.imgURL : defaultPicture}
          className="card-img-top"
          alt="drug"
          style={{ height: '180px' }}
        />
        <BtnFav
          type="button"
          aria-label="add or delete car from favorites"
          onClick={handleFav}
        >
          {isFavorite ? (
            <SvgFavAdd>
              <use href={`${sprite}#icon-normal`}></use>
            </SvgFavAdd>
          ) : (
            <SvgFav>
              <use href={`${sprite}#icon-normal`}></use>
            </SvgFav>
          )}
        </BtnFav>
        <div
          className="card-body"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <h5 className="card-title">{drug.drugName}</h5>
          <p className="card-text">Price: {drug.price} UAH</p>
          <button type="button" className="btn btn-primary" onClick={addToCart}>
            add to Cart
          </button>
        </div>
      </div>
    </DrugItem>
  );
}

export default DrugsItem;
