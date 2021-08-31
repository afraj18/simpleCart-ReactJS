import React, { Component } from 'react';
import './counters.css'
class Counter extends Component {
   /*state = {  
        count : this.props.value,
        //imageUrl : 'https://picsum.photos/100',
        tag : ["Item Name","Item 2", "Item 3"]
    } */
    styles = {
        fontSize : 20,
        fontWeight : 'bold'
    }
    
    render() { 
        //console.log(this.props)
        return ( 
        <div>
        {this.props.children}
            <span   style = {this.styles} 
                    className = {this.getBadge()}> {this.formatCount()}
            </span>
            
            <button 
                onClick = {() => this.props.onIncrement(this.props.counter)} 
                className = "btn btn-secondary btn-sm">  +
            </button>
            <button 
                onClick = {() => this.props.onDecrement(this.props.counter)} 
                className = "btn btn-secondary btn-sm m-1">  -
            </button> 
           

            <button 
                onClick = {() => this.props.onClear(this.props.counter)} 
                className = "btn btn-danger btn-sm m-1">  Clear
            </button> 
            <button 
                onClick={() =>this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm    m-1"> 
                Delete</button>
            
           
            
        </div> );
    }

    getBadge() {
        let classes = "badge m-1 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    };

    /*handleIncrement = () => {
        //console.log(id)
        this.setState({count : this.state.count + 1});
    }; 



    handleDegrement = () => { 
        if(this.state.count !== 0)
        this.setState({count : this.state.count - 1});
        } 
        
    

    clearValue = () => {
        this.setState({count : this.state.count * 0 } );
    }
*/


}
export default Counter;

