import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import { nanoid } from 'nanoid/non-secure'
import css from './ContactForm.module.css'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/operations'

const FeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	number: Yup.string()
		.min(7, 'Too Short!')
		.max(12, 'Too Long!')
		.required('Number is required'),
})

const initialValues = {
	name: '',
	number: '',
}

const ContactForm = () => {
	const dispatch = useDispatch()

	const nameFieldId = useId()
	const numberFieldId = useId()
	const handleSubmit = (values, actions) => {
		dispatch(addContact({ id: nanoid(5), ...values }))
		actions.resetForm()
	}
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form className={css.form} autoComplete='off'>
				<div className={css.formGroup}>
					<label className={css.item} htmlFor={nameFieldId}>
						Name
					</label>
					<Field
						className={css.input}
						type='text'
						name='name'
						id={nameFieldId}
						placeholder='Dean Winchester'
					/>
					<ErrorMessage className={css.error} name='name' component='span' />
				</div>

				<div className={css.formGroup}>
					<label className={css.item} htmlFor={numberFieldId}>
						Number
					</label>
					<Field
						className={css.input}
						type='tel'
						name='number'
						id={numberFieldId}
						placeholder='00000000'
					/>
					<ErrorMessage className={css.error} name='number' component='span' />
				</div>

				<button className={css.btn} type='submit'>
					Add contact
				</button>
			</Form>
		</Formik>
	)
}

export default ContactForm
