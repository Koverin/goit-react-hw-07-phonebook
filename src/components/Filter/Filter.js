import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import { Input } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </label>
  );
}
