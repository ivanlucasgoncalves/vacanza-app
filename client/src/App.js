import React from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import { SigInProvider } from './components/SignIn/SignInContext';

function App() {
	return (
		<SigInProvider>
			<div className="App">
				<SignIn />
			</div>
		</SigInProvider>
	);
}

export default App;
