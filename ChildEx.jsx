import React from 'react';
import ReactDOM from 'react-dom';

class ChildEx extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.updateStateProp}>CLICK</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
   }
}

export default ChildEx;