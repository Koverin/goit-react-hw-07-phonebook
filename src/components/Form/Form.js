import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { FormBox, Input } from './Form.styled';
import { addContactThunk } from 'redux/asyncThunk';
import { selectContacts } from 'redux/selector';
import { useState } from 'react';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const inputSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };

    if (checkExistingName(name)) {
      alert(` ${name} is already in the phonebook.`);
    } else if (checkExistingNumber(number)) {
      alert(` ${number} is already in the phonebook.`);
    } else if (checkEmptyQuery(name, number)) {
      alert(" Enter the contact's name and number phone!");
    } else {
      dispatch(addContactThunk(newContact));
    }

    evt.target.reset();
  };

  const checkExistingName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkExistingNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  return (
    <FormBox onSubmit={inputSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter you name"
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
      </label>
      <button type="submit">Add contact</button>
    </FormBox>
  );
}
