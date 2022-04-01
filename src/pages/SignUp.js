import { useState } from 'react'
import { Link } from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

export default function SignUp() {

	const [passVisibility, setPassVisibility] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	})
	const { name, email, password } = formData

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Welcome</p>
				</header>
				<form>
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
