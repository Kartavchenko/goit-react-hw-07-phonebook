import { useSelector } from 'react-redux';
import { FormContact } from './Form/Form';
import { ListContacts } from './List/List';
import { Filter } from './Filter/Filter';
import { getState } from '../redax/selectors';

export const App = () => {
  const { loading, error } = useSelector(getState);

  return (
    <div
      style={{
        marginLeft: '50px',
        marginTop: '50px',
      }}
    >
      <h1>Phonebook</h1>
      <FormContact />
      <Filter />
      <h2>Contacts</h2>
      {loading && <p>...Loading</p>}
      {error && <p>Somithing went wrong</p>}
      <ListContacts />
    </div>
  );
};
