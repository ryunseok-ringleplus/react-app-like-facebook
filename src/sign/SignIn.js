import React from "react";
import "./Sign.css";
import { thisExpression } from "@babel/types";

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
		const { email, password } = this.state;
		const payload = {
			email: email,
			password: password
		};

		const url =
			"http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signin";

		const opts = {
			method: "POST", //POST : request for editing info, GET: request for getting info
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		};

		fetch(url, opts)
			.then(res => res.json())
			.then(
				result => {
					console.log(result);
					if (result.success) {
						alert("Success");
					} else {
						alert(result.message);
					}
				},
				error => {
					console.log(error);
				}
			);
	}

	render() {
		return (
			<div>
				<div className="inputTagWrapper">
					<label>Email</label>
					<input
						className="inputLabel"
						value={this.state.email}
						onChange={this.updateEmail}
					></input>
				</div>
				<div className="inputTagWrapper">
					<label>Password</label>
					<input
						className="inputLabel"
						type="password"
						value={this.state.password}
						onChange={this.updatePassword}
					></input>
				</div>
				<div className="btn-style">
					<a onClick={this.submit}>Submit</a>
				</div>
			</div>
		);
	}
}

export default SignIn;
