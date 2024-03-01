import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/actions'
import styles from './ContactItem.module.css'

// -const ContactItem = ({ contact }) => {
// -	const dispatch = useDispatch()
// -
// -	const handleDelete = () => {
// -		dispatch(deleteContact(contact.id))
// -	}
// -
// -	return (
// -		<li className={styles.contact}>
// -			<span>{contact.name}</span>
// -			<span>{contact.phone}</span>
// -
// -			<button onClick={handleDelete}>Delete</button>
// -		</li>
// -	)
// -}
const ContactItem = ({ contact }) => {
	const dispatch = useDispatch()

	const handleDelete = () => {
		if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
			dispatch(deleteContact(contact.id))
		}
	}

	return (
		<li className={styles.contact}>
			<span>{contact.name}</span>
			<span>{contact.phone}</span>

			<button onClick={handleDelete}>Delete</button>
		</li>
	)
}

export default ContactItem
