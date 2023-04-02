import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/asyncThunk';

import { Item } from './ListItem.styled';

export function ListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </Item>
  );
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
