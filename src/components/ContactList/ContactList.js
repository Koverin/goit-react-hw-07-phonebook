import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { ListItem } from 'components/ListItem/ListItem';

export function ContactList() {
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
