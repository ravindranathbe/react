import React from 'react';
import ReactDOM from 'react-dom';

class FormEx3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.updateState = this.updateState.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    };

    updateState(e) {
        this.setState({
            data: e.target.value
        });
    }

    updateMessage(e) {
        this.setState({
            message: this.refs.messageBox.value
        })
    }

    render() {
        return (
            <div>
    <p><input type = "text" ref="messageBox" /><input type="button" value="Update" onClick = {this.updateMessage} /></p>
                <h4>{this.state.message}</h4>
            </div>
        );
    }
}

export default FormEx3;