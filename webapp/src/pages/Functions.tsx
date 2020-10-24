import React from 'react';
import axios from 'axios';

interface State {
  message: string;
}

export class Functions extends React.Component {
  public state: State;

  public constructor(props: any) {
    super(props);

    this.state = {
      message: ''
    };

    this.onClick_SendRequest = this.onClick_SendRequest.bind(this);
  }

  public render() {
    return (
      <div className="functions">
        <button onClick={this.onClick_SendRequest}>Send request</button>
        <pre><code>{JSON.stringify(this.state.message, null, 2)}</code></pre>
      </div>
    );
  }

  public async onClick_SendRequest() {
    const response = await axios.post(
      'https://us-central1-playground-project--watermelon.cloudfunctions.net/helloWorld',
      { foo: 'bar', baz: 'qux' }
    );
    console.log('HTTP request sent successfully.');

    this.setState({ message: response.data });
  }
}