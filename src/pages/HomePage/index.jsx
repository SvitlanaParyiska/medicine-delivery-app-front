import { useEffect } from 'react';
import Aside from '../../components/Aside';
import DrugsList from '../../components/DrugsList';
import { GridBox } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { getShopsList } from '../../redux/shopsOperations';
import DrugsFilter from 'components/DrugsFilter';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopsList());
  }, [dispatch]);

  return (
    <main>
      <div className="container ">
        <DrugsFilter />
        <GridBox>
          <Aside />
          <DrugsList />
        </GridBox>
      </div>
    </main>
  );
}

export default HomePage;
