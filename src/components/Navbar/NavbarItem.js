import { useLocation, useNavigate } from "react-router-dom"

export default function NavbarItem({Icon, path, name}) {

	const navigate = useNavigate()
	const location = useLocation()

	const pathMatchRoute = (route) => {
		return location.pathname === route
	}

	return (
		<li className="navbarListItem" onClick={() => navigate(path)}>
			<Icon
				fill={ pathMatchRoute(path) ? '#2c2c2c' : '#8f8f8f' }
				height='36px'width='36px'
			/>
			<p
				className={pathMatchRoute(path)
					? 'navbarListItemNameActive'
					: 'navbarListItemName'}
			> {name} </p>
		</li>
	)
}
