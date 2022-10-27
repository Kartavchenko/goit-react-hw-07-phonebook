export const selectContact = ({contacts}) => contacts.items;

export const selectStatusFilter = ({ search }) => search;

export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const selectFilteredContacts = ({ contacts, search }) => {
    if (!search) {
        return contacts.items
    }
    const lowerCase = search.toLowerCase();
    const filterUser = contacts.items.filter(({ name, number }) => {
        const normalizeName = name.toLowerCase();
        const normalizeNamber = number.toLowerCase();
      const result =
        normalizeName.includes(lowerCase) ||
        normalizeNamber.includes(lowerCase);
      return result;
    });
    return filterUser;
  };