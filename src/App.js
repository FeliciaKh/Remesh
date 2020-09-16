import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateConversation from './components/CreateConversation';
import Input from './components/Input'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Input} />
        <Route exact path='/conversation' component={Input} />
        {/* <Route path='/conversation/:conversationId' component={SingleConversation} /> */}
      </Switch>
    </Router>
  )
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       greeting: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
//       .then(response => response.json())
//       .then(state => this.setState(state));
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>HELLO WORLD</h1>
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="name">Enter your name: </label>
//             <input
//               id="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
//           <p>{this.state.greeting}</p>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
