import React from 'react';
import ReactDOM from 'react-dom';
import ChildEx from './ChildEx.jsx';

class BtnEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: 'Data updated...'})
    }

    render() {
        return (
            
            <ChildEx myDataProp = {this.state.data} updateStateProp = {this.updateState}></ChildEx>
        );
   }
}

export default BtnEx;