import React, { Component } from 'react';
import '../App.css';
//Action aka javascript object, will need an action creator! Thanks REDUX//



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          Remind-a-tron
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Task List : Don't Forget"
            />
          </div>
          <button type="button"
            className="btn btn-success"
            >
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}
export default App;
