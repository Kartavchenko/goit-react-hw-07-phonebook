import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FormContact } from './Form/Form';
import { ListContacts } from './List/List';
import { Filter } from './Filter/Filter';
import { addContact, removeContact } from '../redax/contactsSlice';
import { selectStatusFilter, selectContact } from '../redax/selectors';
// import { fetchContacts } from 'redax/operation';

export const App = () => {
  const userContact = useSelector(selectContact);
  const userFilter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const nameUser = userContact.find(
      item =>
        item.name === form.elements.name.value ??
        item.number === form.elements.number.value
    );
    if (nameUser) {
      return alert(`${nameUser.name} alredy have`);
    }
    dispatch(
      addContact({
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  const getFilteredContacts = () => {
    const lowerCase = userFilter.toLowerCase();
    const filterUser = userContact.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const normalizeNamber = number.toLowerCase();
      const result =
        normalizeName.includes(lowerCase) ||
        normalizeNamber.includes(lowerCase);
      return result;
    });
    return filterUser;
  };

  const arrayContacts = getFilteredContacts();

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(userFilter(search));
  };

  const deleteContact = id => {
    return dispatch(removeContact(id));
  };

  return (
    <div
      style={{
        marginLeft: '50px',
        marginTop: '50px',
      }}
    >
      <h1>Phonebook</h1>
      <FormContact handleSubmit={handleSubmit} />
      <Filter filter={userFilter} handleFilter={handleFilter} />
      <h2>Contacts</h2>
      <ListContacts
        filteredContacts={arrayContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};
