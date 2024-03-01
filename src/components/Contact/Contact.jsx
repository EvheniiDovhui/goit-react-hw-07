import { FaUser } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import css from './Contact.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/operations'

const Contact = ({ contact: { name, phone, id } }) => {
	const dispatch = useDispatch()
	const handleDelete = () => dispatch(deleteContact(id))

	return (
		<div className={css.contact}>
			<div className={css.text}>
				<p>
					<FaUser /> {name}
				</p>
				<p>
					<FaPhone /> {phone}
				</p>
			</div>
			<button className={css.btn} onClick={handleDelete}>
				Delete
			</button>
		</div>
	)
}

export default Contact
