import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redax/operation';
import { selectFilteredContacts } from 'redax/selectors';

export const FormContact = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectFilteredContacts);

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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Name
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Number
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginBottom: '10px' }}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

FormContact.propTypes = {
  lable: PropTypes.string,
};
