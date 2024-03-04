import Select from 'react-select';
import { Title, SelectBox } from './DrugsFilter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/shopsSlice';

function DrugsFilter() {
  const dispatch = useDispatch();

  function setFilter(value) {
    dispatch(changeFilter(value));
  }

  return (
    <SelectBox>
      <Title>Filter drugs</Title>
      <Select
        options={[
          { value: 'low', label: 'Price low to high' },
          { value: 'high', label: 'Price high to low' },
          { value: 'all', label: 'No filters' },
        ]}
        aria-label="Filter drugs"
        placeholder="Sort by"
        onChange={e => {
          setFilter(e.value);
        }}
      />
    </SelectBox>
  );
}

export default DrugsFilter;
