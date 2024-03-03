import DrugsItem from 'components/DrugsItem';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavoritesDrugs } from '../../redux/shopsSelectors';

function FavoritesPage() {
  const favoritesArray = useSelector(selectFavoritesDrugs);

  return (
    <main>
      <div className="container">
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {favoritesArray.length > 0 ? (
            favoritesArray.map(item => <DrugsItem drug={item} key={nanoid()} />)
          ) : (
            <>
              <p>Your favorites list is still empty...</p>
              <Link to="/">Back to shopping</Link>
            </>
          )}
        </ul>
      </div>
    </main>
  );
}

export default FavoritesPage;
