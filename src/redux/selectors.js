import { createSelector } from '@reduxjs/toolkit'

export const selectContacts = state => state.contacts.items

export const selectContactsFilter = state => state.filters.name

export const selectLoading = state => state.contacts.isLoading

export const selectError = state => state.contacts.error

export const selectVisibleContacts = createSelector(
	[selectContacts, selectContactsFilter],
	(contacts, filter) => {
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		)
	}
)
