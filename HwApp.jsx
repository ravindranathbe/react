import React from 'react';
import ReactDOM from 'react-dom';

class HwApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    'when': '2 minutes ago',
                    'who': 'Jill Dupre',
                    'description': 'Created new account',
                },
                {
                    'when': '1 hour ago',
                    'who': 'Lose White',
                    'description': 'Added fist chapter',
                },
                {
                    'when': '2 hours ago',
                    'who': 'Jordan Whash',
                    'description': 'Created new account',
                }
            ],
            heading: ['When', 'Who', 'Description']
        };
    }

    render() {
        return (
            <div>
            <h1>Welcome to app home!</h1>
            <h2>Recent changes</h2>
            <table className="table table-striped">
            <thead>
                <THead2 data = {this.state.heading} />
            </thead>
            <tbody>
                {this.state.data.map((row, i) => <TRow data = {row} key = {i} origKey = {i}  />)}
            </tbody>
            </table>
            </div>
        );
    }
}

HwApp.propTypes = {
    
};

HwApp.defaultProps = {
    
}

class THead extends React.Component {
    render() {
        return (
            <th>{this.props.data}</th>
        );
    }
}

class THead2 extends React.Component {
    render() {
        return (
            <tr>
                {this.props.data.map((d, i) => <THCell data = {d} key = {i} />)}
            </tr>
        );
    }
}

class THCell extends React.Component {
    render() {
        return (
            <th>{this.props.data}</th>
        );
    }
}

class TRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.when}</td>
            <td>{this.props.data.who}</td>
            <td>{this.props.data.description}</td>
         </tr>
      );
   }
}

export default HwApp;