import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setContactsFilter } from '../../redux/filtersSlice'
import { selectContactsFilter } from '../../redux/selectors'

const SearchBox = () => {
	const dispatch = useDispatch()
	const filter = useSelector(selectContactsFilter)

	const handleChangeFilter = ({ currentTarget: { value } }) => {
		const normalizedValue = value.toLowerCase()
		dispatch(setContactsFilter(normalizedValue))
	}

	return (
		<div>
			<p className={css.item}>Find contacts by name</p>
			<input
				name='filter'
				className={css.searchBox}
				type='text'
				value={filter}
				onChange={handleChangeFilter}
				placeholder='Name'
			/>
		</div>
	)
}

export default SearchBox
