import React from 'react';
import ReactDOM from 'react-dom';
import Content2 from './Content2.jsx';
import FormEx from './FormEx.jsx';
import BtnEx from './BtnEx.jsx';
import RefsEx from './RefsEx.jsx';
import KeysEx from './KeysEx.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "ABC",
                    "age": 25
                },
                {
                    "id": 2,
                    "name": "ABCD",
                    'age': 26
                }
            ],
            myStyle: {
                color: '#FF00F0',
                fontSize: 20
            },
            header: 'Header text...updated',
            data2: [],
            data3: 1
        }
        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setStateHandler() {
        var item = "setState... ";
        var myArray = this.state.data2;
        myArray.push(item)
        this.setState({data2: myArray})
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    setNewNumber() {
        this.setState({data3: this.state.data3 + 1})
    }

    render() {
        // console.log('debug');
        return (
            <div>
                <Header headerProp = {this.state.header} defProp = 'Test' />
                { // End of the line Comment...
                }
                <h2>{this.state.header}</h2>
                <h3>Array: {this.props.propArray}</h3>
                <div>
                    <button onClick = {this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.data2}</h4>
                </div>
                <div>
                    <button onClick = {this.forceUpdateHandler}>FORCE UPDATE {Math.random()} </button>
                    <h4>Random number: {Math.random()}</h4>
                    <h4>Random number: {Math.random()}</h4>
                    <h5>DEBUG</h5>
                </div>
                <div>
                    <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                    <div id = "myDiv">NODE</div>
                </div>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
                {/* Multi 
                line comment */}
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content2 myNumber = {this.state.data3}></Content2>
                <FormEx />
                <BtnEx />
                <RefsEx />
                <KeysEx />
            </div>
        );
    }
}

App.propTypes = {
   propArray: React.PropTypes.array.isRequired
}

App.defaultProps = {
    propArray: [1,2,3,4,5]
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 style = {this.props.myStyle}>{this.props.headerProp}</h1>
                <h2>{this.props.defProp}</h2>
            </div>
        );
    }
}

Header.defaultProps = {
   defProp: "Default from props...",
   headerProp: "Default from header props..."
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class Content extends React.Component {
    render() {
        var myStyle = {
            color: '#FF00F0',
            fontSize: 20
        };

        return (
            <div>
                <h2>Content</h2>
                <p data-attr1 = "hello">This is the content!!!</p>
                <p className="h" style = {myStyle}>Sample calc: 10 + 20 = {10 + 20}</p>
            </div>
        );
    }
}

export default App;