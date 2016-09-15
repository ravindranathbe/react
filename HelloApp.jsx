import React from 'react';
import ReactDOM from 'react-dom';
import FormEx3 from './FormEx3.jsx';

class HelloApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Initial data...'
        }
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        var attr1 = this.props.attr1;
        var attr2 = this.props.attr2;
        return (
            <div>
                <div>Hello React...by {attr1} #{attr2}</div>
                <div><input type="text" onChange={this.updateMessage} /></div>
                <div>Message: {this.state.message}</div>
                <div><FormEx3 /></div>
            </div>
        );
    }
}

HelloApp.propTypes = {
    attr1: React.PropTypes.string,
    attr2: React.PropTypes.number,
    attr3: React.PropTypes.string.isRequired
};

HelloApp.defaultProps = {
    attr1: 'Default string',
    attr2: 0,
    attr3: 'Default string 2'
}

export default HelloApp;