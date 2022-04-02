import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import { app, db } from '../firebase.config'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'



export default function SignUp() {

	const [passVisibility, setPassVisibility] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	})
	const { name, email, password } = formData
	const navigate = useNavigate()

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			const auth = getAuth(app)
			const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
			const user = userCredentials.user

			updateProfile(user, {
				displayName: name
			})

			const formDataCopy = {...formData}
			delete formDataCopy.password
			formDataCopy.timestamp = serverTimestamp()

			await setDoc(doc(db, 'users', user.uid), formDataCopy)

			navigate('/')
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Welcome</p>
				</header>
				<form onSubmit={onSubmit}>
					<input
						className='nameInput'
						placeholder='Name'
						type='text'
						id='name'
						value={name}
						onChange={onChange}
					/>

					<input
						className='emailInput'
						placeholder='Email'
						type='email'
						id='email'
						value={email}
						onChange={onChange}
					/>

					<div className='passwordInputDiv'>
						<input
							type={passVisibility ? 'text' : 'password'}
							className='passwordInput'
							placeholder='Password'
							id='password'
							value={password}
							onChange={onChange}
						/>

						<img
							src={visibilityIcon}
							alt='show password'
							className='showPassword'
							onClick={() => setPassVisibility(!passVisibility)}
						/>

						<Link to='/forgot-password' className='forgotPasswordLink'>
							Forgot password?
						</Link>

						<div className='signUpBar'>
							<p className='signUpText'>Sign Up</p>
							<button className='signUpButton'>
								<ArrowRightIcon fill='#ffffff' width='34px' height='34px'>
								</ArrowRightIcon>
							</button>
						</div>
					</div>
				</form>

				{/* google auth here */}

				<Link to='/sign-In' className='registerLink'>
					Sign In Instead
				</Link>
			</div>
		</>
	)
}
