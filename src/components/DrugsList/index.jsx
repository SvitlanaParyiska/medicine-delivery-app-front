import DrugsItem from 'components/DrugsItem';
import { useSelector } from 'react-redux';
import { selectDrugsByShop } from '../../redux/shopsSelectors';
import { DrugsBox } from './DrugsList.styled';
import { nanoid } from 'nanoid';

function DrugsList() {
  const drugsByShop = useSelector(selectDrugsByShop);

  return (
    <DrugsBox>
      <ul>
        {drugsByShop.length > 0 &&
          drugsByShop.map(item => <DrugsItem drug={item} key={nanoid()} />)}
      </ul>
    </DrugsBox>
  );
}

export default DrugsList;
