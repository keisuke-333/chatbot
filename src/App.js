import './App.css';

export default class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: {},
      open: false
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
