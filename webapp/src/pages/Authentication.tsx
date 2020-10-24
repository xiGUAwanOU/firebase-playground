import firebase from 'firebase';
import React, { ChangeEvent } from 'react';

interface State {
  email: string;
  password: string;
  loggedIn: boolean;
}

export class Authentication extends React.Component {
  public state: State;

  public constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: firebase.auth().currentUser !== null
    };

    this.onChange_Email = this.onChange_Email.bind(this);
    this.onChange_Password = this.onChange_Password.bind(this);
    this.onClick_Register = this.onClick_Register.bind(this);
    this.onClick_Login = this.onClick_Login.bind(this);
    this.onClick_Logout = this.onClick_Logout.bind(this);
  }

  public componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user !== null });
    });
  }

  public render() {
    return (
      <div className="authentication">
        <h1>Authentication</h1>
        <p><input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChange_Email}
        /></p>
        <p><input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange_Password}
        /></p>
        <p>
          <button onClick={this.onClick_Register}>Register</button>
          <button onClick={this.onClick_Login}>Login</button>
          <button onClick={this.onClick_Logout}>Logout</button>
        </p>
        {this.state.loggedIn && (
          <p>You have already logged in!</p>
        )}
      </div>
    );
  }

  public onChange_Email(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  public onChange_Password(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  public async onClick_Register() {
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
    console.log('Registered successfully!');
  }

  public async onClick_Login() {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    this.setState({ email: '', password: '', loggedIn: firebase.auth().currentUser !== null });
    console.log('Logged in successfully!');
  }

  public async onClick_Logout() {
    await firebase.auth().signOut();
    console.log('Logged out successfully!');
  }
}
