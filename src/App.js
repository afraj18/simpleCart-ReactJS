
import React, { Component } from 'react';

import './App.css';
import Counters from './components/conters';
import NavBar from './components/navBar';
import HomePage from './components/myHomePage';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 1 }
    ]
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;

    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--;
    this.setState({ counters })

  }

  clearItem = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value = 0;
    this.setState({ counters })
  }

  handleDelete = id => {
    const countArray = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: countArray });

  }
  clearAll = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0
      return c;
    }
    );
    this.setState({ counters: counter })

  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <div className="row">
          {/* <div className="col-9"><HomePage /></div> */}
          <div className="col"> <main className="container">
            <Counters
              counters={this.state.counters}
              onDelete={this.handleDelete}
              onIncrease={this.handleIncrement}
              onDecrease={this.handleDecrement}
              onClear={this.clearItem}
              onClearAll={this.clearAll}
            />
          </main>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;


