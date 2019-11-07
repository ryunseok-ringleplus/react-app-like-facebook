import React from "react";
import "./Sign.css";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};

		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.submit = this.submit.bind(this);
	}

	updateEmail(evt) {
		// alert(evt.target.value);

		this.setState({
			email: evt.target.value
		});
	}
	updatePassword(evt) {
		this.setState({
			password: evt.target.value
		});
	}

	submit() {
		alert("submit clicked");

		// alert(this.state.email);
		// alert(this.state.password);

		const { email, password } = this.state;
		alert(email);
	}

	render() {
		return (
			<div>
				<input
					value={this.state.email}
					onChange={this.updateEmail}
				></input>
				<input
					type="password"
					value={this.state.password}
					onChange={this.updatePassword}
				></input>

				<a onClick={this.submit}>Submit</a>
			</div>
		);
	}
}

export default SignIn;
