import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
			<h1>House Marketplace App</h1>
			<Router>
				<Routes>
					<Route exact path='/' element={<Explore/>}/>
					<Route exact path='/offers' element={<Offers/>}/>
					<Route exact path='/profile' element={<Profile/>}/>
					<Route exact path='/sign-in' element={<SignIn/>}/>
					<Route exact path='/sign-up' element={<SignUp/>}/>
					<Route exact path='/forgot-password' element={<ForgotPassword/>}/>
				</Routes>
				<Navbar/>
			</Router>
    </>
  );
}

export default App;
