import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; 

// import Header from './components/Header.js'
import RouterConfig from './router'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerName: 'headerName'
        };

        this.changeHeaderName = this.changeHeaderName.bind(this);
    }

    changeHeaderName() {

        this.setState({
            headerName: 'FooterName'
        })
    }

    componentDidMount() {

      const headerDom = this.myRef;
      console.log(headerDom)
    }

    render() {
        return (
            <div className="App">

                {/* <Header headerName={this.state.headerName} /> */}

                <header ref={(input) => this.myRef = input} className="App-header" onClick={this.changeHeaderName}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                
                <RouterConfig />
            </div>
        );
    }
}

export default App;
