import NavbarItem from './NavbarItem'
import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutline } from '../../assets/svg/personOutlineIcon.svg'

export default function Navbar() { 
	return (
		<footer className="navbar">	
			<nav className="navbarNav">
				<ul className="navbarListItems">
					<NavbarItem Icon={ExploreIcon} name='Explore' path="/"/>
					<NavbarItem Icon={OfferIcon} name='Offers' path="/offers"/>
					<NavbarItem Icon={PersonOutline} name='Profile' path="/profile"/>
				</ul>
			</nav>

		</footer>
	)
}