import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FormContact } from './Form/Form';
import { ListContacts } from './List/List';
import { Filter } from './Filter/Filter';
import { filterContacts } from 'redax/filterSlise';
import { fetchContacts, addContact, removeContact } from 'redax/operation';
import {
  selectStatusFilter,
  selectFilteredContacts,
  getState,
} from '../redax/selectors';

export const App = () => {
  const contactsFilter = useSelector(selectStatusFilter);
  const items = useSelector(selectFilteredContacts);
  const { loading, error } = useSelector(getState);
  const dispatch = useDispatch();

  const deleteContact = id => {
    return dispatch(removeContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const {
      elements: { name, number },
    } = e.target;
    const nameUser = items.find(
      item => item.name === name.value ?? item.number === number.value
    );
    if (nameUser) {
      return alert(`${nameUser.name} alredy have`);
    }
    dispatch(
      addContact({
        name: name.value,
        phone: number.value,
      })
    );
    form.reset();
  };

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(filterContacts(search));
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
      <Filter filter={contactsFilter} handleFilter={handleFilter} />
      <h2>Contacts</h2>
      {loading && <p>...Loading</p>}
      {error && <p>Somithing went wrong</p>}
      <ListContacts filteredContacts={items} deleteContact={deleteContact} />
    </div>
  );
};
