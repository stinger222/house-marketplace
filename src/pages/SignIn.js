import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../firebase.config'

export default function SignIn() {

	const navigate = useNavigate()
	const [passVisibility, setPassVisibility] = useState(false)
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})
	const { email, password } = formData

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

			const userCredentials = await signInWithEmailAndPassword(auth, email, password)

			if (userCredentials.user) {
				console.log('Signed In Successfully!!')

				navigate('/')
			}

		} catch (error) {
			console.error({e: error});
		}

	}

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Welcome Back</p>
				</header>
				<form onSubmit={onSubmit}>
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

						<div className='signInBar'>
							<p className='signInText'>Sign In</p>
							<button className='signInButton'>
								<ArrowRightIcon fill='#ffffff' width='34px' height='34px'>
								</ArrowRightIcon>
							</button>
						</div>
					</div>
				</form>

				{/* google auth here */}

				<Link to='/sign-up' className='registerLink'>
					Sign Up Instead
				</Link>
			</div>
		</>
	)
}
