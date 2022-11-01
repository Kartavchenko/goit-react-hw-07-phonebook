import { selectStatusFilter } from 'redax/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redax/filterSlise';

export function Filter() {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(selectStatusFilter);

  const handleFilter = e => {
    const search = e.target.value;
    dispatch(filterContacts(search));
  };
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      Find contact by name
      <input
        style={{
          width: '200px',
          marginTop: '5px',
        }}
        type="text"
        name="filter"
        value={contactsFilter}
        onChange={handleFilter}
      />
    </label>
  );
}
