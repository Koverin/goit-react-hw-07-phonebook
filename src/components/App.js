import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/asyncThunk';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const user = useSelector(selectContacts);

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
