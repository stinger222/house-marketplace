import { getAuth } from "firebase/auth"

export default function Profile() {
	const auth = getAuth()

	return <>
		<h1>Profile</h1>
		{auth.currentUser && <h1 style={{"color": "royalblue", "margin-left": "30px"}}>
			Logged in as: {auth.currentUser.displayName}
		</h1>}
	</>
}
