export const selectStatusFilter = ({ filter }) => filter;

export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const selectFilteredContacts = ({ contacts, search }) => {
    if (!search) {
        return contacts.items
    }
    const lowerCase = search.toLowerCase();
    const filterUser = contacts.items.filter(({ name, phone }) => {
        const normalizeName = name.toLowerCase();
        const normalizeNamber = phone.toLowerCase();
      const result =
        normalizeName.includes(lowerCase) ||
        normalizeNamber.includes(lowerCase);
      return result;
    });
    return filterUser;
  };