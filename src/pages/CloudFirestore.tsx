import firebase from 'firebase';
import React, { ChangeEvent } from 'react';

interface State {
  message: string;
  messageList: Message[];
}

interface Message {
  id: string;
  text: string;
}

export class CloudFirestore extends React.Component {
  public db: firebase.firestore.Firestore;
  public state: State;

  public constructor(props: any) {
    super(props);

    this.db = firebase.firestore();

    this.state = {
      message: '',
      messageList: [],
    };

    this.onChange_Message = this.onChange_Message.bind(this);
    this.onClick_Add = this.onClick_Add.bind(this);
    this.onClick_Delete = this.onClick_Delete.bind(this);
  }

  public async componentDidMount() {
    this.reloadData();
  }

  public render() {
    return (
      <div className="cloud-firestore">
        <h1>Cloud Firestore</h1>
        <p><input
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.onChange_Message}
        /></p>
        <p><button onClick={this.onClick_Add}>Add</button></p>
        <ul>
          {this.state.messageList.map(message => (
            <li key={message.id}>
              {message.text}
              <button onClick={() => this.onClick_Delete(message.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  public onChange_Message(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ message: event.target.value });
  }

  public async onClick_Add() {
    await this.db.collection('messages').add({ text: this.state.message });
    this.setState({ message: '' });
    console.log('Message successfully added.');

    await this.reloadData();
  }

  public async onClick_Delete(id: string) {
    await this.db.collection('messages').doc(id).delete();
    console.log('Message successfully deleted.');

    await this.reloadData();
  }

  private async reloadData() {
    const result = await this.db.collection('messages').limit(10).get();
    this.setState({
      messageList: result.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
      }))
    });
  }
}
