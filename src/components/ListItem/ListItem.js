import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

import { Item } from './ListItem.styled';

export function ListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </Item>
  );
}
