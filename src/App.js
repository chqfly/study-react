import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js'
import Select from './components/Select.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerName: 'headerName'
        }
        this.changeHeaderName = this.changeHeaderName.bind(this);
    }

    changeHeaderName() {

        this.setState({
            headerName: 'FooterName'
        })
    }

    render() {
        return (
        <div className="App">

            <Header headerName={this.state.headerName} />

            <header className="App-header" onClick={this.changeHeaderName}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
           
            <Select/>
        </div>
        );
    }
}

export default App;
