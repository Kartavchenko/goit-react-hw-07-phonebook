export function Filter({ contactsFilter, handleFilter }) {
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
