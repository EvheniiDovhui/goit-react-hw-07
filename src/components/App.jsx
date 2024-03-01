import { useState } from 'react'
import './App.css'
import ContactsList from './ContactsList/ContactsList'
import ContactItem from './ContactItem/ContactItem'

const App = () => {
	return (
		<div>
			<h1>Contacts App</h1>
			<ContactsList />
			<ContactItem />
		</div>
	)
}

export default App
