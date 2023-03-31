import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const user = useSelector(state => state.contacts.items);

  return (
    <Section>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      {!user.length ? (
        <p>Your phonebook is empty. Add your first contact</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Section>
  );
}
