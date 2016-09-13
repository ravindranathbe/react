import React from 'react';
import ReactDOM from 'react-dom';

class FormEx2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...'
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({
            data: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></div>
            </div>
        );
    }
}

export default FormEx2;