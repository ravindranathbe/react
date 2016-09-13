import React from 'react';
import ReactDOM from 'react-dom';

class KeysEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
                id: 1,
                name: 'ABC'
            },
            {
                id: 2,
                name: 'ABCD'
            },
            {
                id: 3,
                name: 'ABCDE'
            }
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                {this.state.data.map((dataItem,i) => <LiEx key = {i} componentData = {dataItem}></LiEx>)}
                    {//<li>{dataItem.name}</li>
                    }
                </ul>
            </div>
        );
    }
}

class LiEx extends React.Component {
    render() {
        return (
            <li>{this.props.componentData.id} = {this.props.componentData.name}</li>
        );
    }
}

export default KeysEx;