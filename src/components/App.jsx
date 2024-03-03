import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import Title from './Title/Title'
import { selectLoading, selectError } from '../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../redux/operations'

function App() {
	const dispatch = useDispatch()
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	let content = <ContactList />

	if (loading || error) {
		content = null
	}

	return (
		<>
			<div>
				<Title />
				<ContactForm />
				<SearchBox />
				{content}
			</div>
		</>
	)
}

export default App
