import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./sign/SignIn";

//SignIn : Camel case
//sign_in : snake case

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<SignIn />
			</header>
		</div>
	);
}

export default App;
