import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { FormContact } from './Form/Form';
import { ListContacts } from './List/List';
import { Filter } from './Filter/Filter';
import {
  fetchContacts,
  addPhoneNumber,
  removePhoneNumber,
} from 'redax/operation';
import {
  selectStatusFilter,
  // selectContact,
  selectFilteredContacts,
} from '../redax/selectors';

export const App = () => {
  // const userContact = useSelector(selectContact);
  const userFilter = useSelector(selectStatusFilter);
  const items = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const deleteContact = id => {
    return dispatch(removePhoneNumber(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // const formName = form.elements.name.value;
    // const formNumber = form.elements.number.value;
    dispatch(addPhoneNumber());
    form.reset();
  };

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(userFilter(search));
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
      <ListContacts filteredContacts={items} deleteContact={deleteContact} />
    </div>
  );
};
