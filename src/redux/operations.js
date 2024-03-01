import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://65db88d83ea883a15291dffb.mockapi.io'

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts')
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)

export const addContact = createAsyncThunk(
	'contacts/addContacts',
	async (contact, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', contact)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)
