import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://6427308646fd35eb7c3bf2e5.mockapi.io/contacts/',
});

export const getContacts = async () => {
  const { data } = await contactsApi.get();
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsApi.post('', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsApi.delete(id);
  return data;
};
