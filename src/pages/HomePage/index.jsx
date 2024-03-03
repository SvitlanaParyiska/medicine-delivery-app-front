import { useEffect } from 'react';
import Aside from '../../components/Aside';
import DrugsList from '../../components/DrugsList';
import { GridBox } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { getShopsList } from '../../redux/shopsOperations';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopsList());
  }, [dispatch]);

  return (
    <main>
      <GridBox className="container ">
        <Aside />
        <DrugsList />
      </GridBox>
    </main>
  );
}

export default HomePage;
