import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { FormBox, Input } from './Form.styled';
import { addContactThunk } from 'redux/asyncThunk';

export function Form() {
  const dispatch = useDispatch();

  const inputSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };

    dispatch(addContactThunk(newContact));

    evt.target.reset();
  };

  return (
    <FormBox onSubmit={inputSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
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
