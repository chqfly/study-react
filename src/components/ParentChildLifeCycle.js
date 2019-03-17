import React, { Component } from 'react';

class Children extends Component {
    constructor(props) {
        super(props);
        console.log('child constructor');
    }
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('child shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('child componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('child componentDidUpdate');
    }
    componentWillMount() {
        console.log('child componentWillMount');
    }
    componentDidMount() {
        console.log('child componentDidMount');
    }
    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }
    render() {
        console.log('child render');
        return (
            <div>children{this.props.count}</div>
        )
    }
}

export default class ParentChildLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('parent constructor');

        this.state = {
            count: 0
        }
    }
    componentWillReceiveProps() {
        console.log('parent componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('parent shouldComponentUpdate');
        return true;
    }
    componentWillUpdate() {
        console.log('parent componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('parent componentDidUpdate');
    }
    componentWillMount() {
        console.log('parent componentWillMount');
    }
    componentDidMount() {
        console.log('parent componentDidMount');
    }
    componentWillUnmount() {
        console.log('parent componentWillUnmount');
    }
    
    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log('parent render');
        return (
            <div>
                <p>
                    parent {this.state.count} 
                    <button onClick={this.addCount.bind(this)}>+</button>
                </p>
                <Children count={this.state.count}/>
            </div>
        )
    }
}