import PropTypes from 'prop-types';

export const ListContacts = ({ filteredContacts, deleteContact }) => {
  const user = filteredContacts.map(({ id, name, phone }) => {
    return (
      <li
        key={id}
        style={{
          marginBottom: '10px',
        }}
      >
        {name}: {phone}
        <button
          type="button"
          onClick={() => deleteContact(id)}
          style={{
            marginLeft: '5px',
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{user}</ul>;
};

ListContacts.propTypes = {
  arrayContacts: PropTypes.array,
  button: PropTypes.element,
};
