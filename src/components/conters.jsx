import React, { Component } from 'react';
import Counter from "./counter";
import './counters.css';


class Counters extends Component {

    render() {
        return (
            <div>
                <div>
                    <button
                        onClick={this.props.onClearAll}
                        className="btn btn-primary btn-sm m-2">
                        Reset
                    </button>


                    {this.props.counters.map(counter => (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={this.props.onDelete}
                            onIncrement={this.props.onIncrease}
                            onDecrement={this.props.onDecrease}
                            onClear={this.props.onClear}
                            selected>

                        </Counter>

                    ))}
                </div>
            </div>
        );
    }
}

export default Counters;