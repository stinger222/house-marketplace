import { useState } from 'react'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

export default function SignIn() {

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

	return (
		<>
			<div className="pageContainer">
				<header>
					<p className="pageHeader">Welcome Back</p>
				</header>
				<form>
					<input
						className="emailInput"
						placeholder="Email"
						type="email"
						id="email"
						value={email}
						onChange={onChange}
					/>

					<div className="passwordInputDiv">
						<input
							type={passVisibility ? "text" : "password"}
							className="passwordInput"
							placeholder="Password"
							id="password"
							value={password}
							onChange={onChange}
						/>

						<img
							src={visibilityIcon}
							alt="show password"
							className="showPassword"
							onClick={() => setPassVisibility(!passVisibility)}
						/>
					</div>
				</form>
			</div>
		</>
	);
}
