import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword.tsx';
import Profile from './pages/Profile.tsx';
import Explore from './pages/Explore.tsx';
import SignIn from './pages/SignIn.tsx';
import SignUp from './pages/SignUp.tsx';
import Offers from './pages/Offers.tsx';

function App() {
  return (
    <>
			<h1>House Marketplace App</h1>
			<Router>
				<Routes>
					<Route path='/' element={<Explore/>}/>
					<Route path='/offers' element={<Offers/>}/>
					<Route path='/profile' element={<Profile/>}/>
					<Route path='/sign-in' element={<SignIn/>}/>
					<Route path='/sign-up' element={<SignUp/>}/>
					<Route path='/forgot-password' element={<ForgotPassword/>}/>
				</Routes>
			</Router>
    </>
  );
}

export default App;
