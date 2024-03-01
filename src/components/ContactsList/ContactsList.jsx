import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/actions'
import ContactItem from '../ContactItem/ContactItem'
import styles from './ContactsList.module.css' // Змінили шлях до стилів

const ContactsList = () => {
	const dispatch = useDispatch()
	const contacts = useSelector(state => state.contacts.items)
	const loading = useSelector(state => state.contacts.loading)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<div className={styles.contactsList}>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{contacts.map(contact => (
						<ContactItem key={contact.id} contact={contact} />
					))}
				</ul>
			)}
		</div>
	)
}

export default ContactsList
