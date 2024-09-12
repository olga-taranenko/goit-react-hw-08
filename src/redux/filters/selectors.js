import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filter.searchValue;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, searchValue) =>
    contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchValue.toLowerCase());
    })
);
