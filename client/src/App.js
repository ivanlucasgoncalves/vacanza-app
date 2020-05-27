import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import './App.css';
import SignIn from './components/SignIn/SignIn';
import { SigInProvider } from './components/SignIn/SignInContext';
import SignUp from './components/SignUp/SignUp';
import { SignUpProvider } from './components/SignUp/SignUpContext';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<SigInProvider>
						<SignIn />
					</SigInProvider>
				</Route>
				<Route exact path="/signup">
					<SignUpProvider>
						<SignUp />
					</SignUpProvider>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
