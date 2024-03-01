import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux'
import { selectVisibleContacts } from '../../redux/selectors'

const ContactList = () => {
	const contacts = useSelector(selectVisibleContacts)

	return (
		<ul className={css.list}>
			{contacts.map(contact => (
				<li key={contact.id}>
					<Contact contact={contact} />
				</li>
			))}
		</ul>
	)
}

export default ContactList
