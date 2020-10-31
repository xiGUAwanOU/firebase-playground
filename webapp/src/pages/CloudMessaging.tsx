import firebase from 'firebase';
import React from 'react';

interface State {
  token: string;
  message: string;
}

export class CloudMessaging extends React.Component {
  public state: State;

  public constructor(props: any) {
    super(props);

    this.state = {
      token: '',
      message: ''
    };
  }

  public async componentDidMount() {
    const messaging = firebase.messaging();
    const token = await messaging.getToken({ vapidKey: 'BCmcCQv3WxHSjdOgz48fvaV4Xq7aoOWU1DITT-NqJMCajAv4dfGMAyk31uOBTsjhIPNwefh5bHeToXrFrFH5aLE' });

    this.setState({ token });

    messaging.onMessage((payload) => {
      this.setState({ message: JSON.stringify(payload, null, 2) });
      const title = payload.notification.title;
      const body = payload.notification.body;
      new Notification(title, { body });
    });
  }

  public render() {
    return (
      <div className="functions">
        <p>Token:</p>
        <pre><code>{this.state.token}</code></pre>
        <p>Message Payload:</p>
        <pre><code>{this.state.message}</code></pre>
      </div>
    );
  }
}