export function Filter({ filter, handleFilter }) {
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
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
}
