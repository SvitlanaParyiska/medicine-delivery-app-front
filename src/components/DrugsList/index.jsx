import DrugsItem from 'components/DrugsItem';
import { useSelector } from 'react-redux';
import { selectDrugsByShop, selectFilter } from '../../redux/shopsSelectors';
import { DrugsBox } from './DrugsList.styled';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

function DrugsList() {
  const drugsByShop = useSelector(selectDrugsByShop);
  const filter = useSelector(selectFilter);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (filter === 'low') {
      const low = [...drugsByShop].sort((a, b) => a.price - b.price);
      setFilteredList(low);
    } else if (filter === 'high') {
      const high = [...drugsByShop].sort((a, b) => b.price - a.price);
      setFilteredList(high);
    } else {
      setFilteredList(drugsByShop);
    }
  }, [drugsByShop, filter]);

  return (
    <DrugsBox>
      <ul>
        {filteredList.length > 0 &&
          filteredList.map(item => <DrugsItem drug={item} key={nanoid()} />)}
      </ul>
    </DrugsBox>
  );
}

export default DrugsList;
