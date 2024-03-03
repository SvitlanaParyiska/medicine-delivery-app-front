import ShopsList from '../../components/ShopsList';
import { AsideBox } from './Aside.styled';

function Aside() {
  return (
    <AsideBox>
      <h2>Shops:</h2>
      <ShopsList />
    </AsideBox>
  );
}

export default Aside;
