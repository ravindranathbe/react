import React from 'react';
import ReactDOM from 'react-dom';

class FormEx4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fNameDis: true,
            lNameDis: true
        }
        this.updateFName = this.updateFName.bind(this);
        this.updateLName = this.updateLName.bind(this);
    }

    updateFName(e) {
        this.setState({
            fNameDis: false
        });
        console.log(this.refs.fNameBtn.value);
        e.target.value = 'Update';
        console.log(this.refs.fNameBtn.value);
        this.refs.fNameBtn.value = 'Update';
    }

    updateLName(e) {
        
    }

    render() {
        var fName = this.props.fName;
        var lName = this.props.lName;

        return (
            <div>
                <div>Hello {fName} {lName}</div>
                <p>First Name: <input type="text" ref="fName" disabled={this.state.fNameDis} /> <input type="button" value="Edit" onClick={this.updateFName} ref="fNameBtn" /></p>
                <p>Last Name: <input type="text" ref="lName" disabled={this.state.lNameDis} /> <input type="button" value="Edit" onClick={this.updateLName} /></p>
            </div>
        );
    }
}

export default FormEx4;