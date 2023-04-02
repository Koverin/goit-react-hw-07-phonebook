import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { ListItem } from 'components/ListItem/ListItem';
import { getFilteredContacts } from 'redux/selector';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
