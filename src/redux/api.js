import axios from 'axios'

const BASE_URL = 'https://65db88d83ea883a15291dffb.mockapi.io'

export const fetchContactsAPI = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/contacts`)
		return response.data
	} catch (error) {
		console.error('Error fetching contacts:', error)
		throw error
	}
}

export const addContactAPI = async contact => {
	try {
		const response = await axios.post(`${BASE_URL}/contacts`, contact)
		return response.data
	} catch (error) {
		console.error('Error adding contact:', error)
		throw error
	}
}

export const deleteContactAPI = async contactId => {
	try {
		await axios.delete(`${BASE_URL}/contacts/${contactId}`)
	} catch (error) {
		console.error('Error deleting contact:', error)
		throw error
	}
}
