import React, { Component }from 'react';

export default function HOCLifeCycle(WrapedComponent) {

    const log = (value) => console.log(`${WrapedComponent.name}:${value}`);

    return class extends Component {
        constructor() {
            super();
            log('constructor');
        }
        componentWillReceiveProps() {
            log('componentWillReceiveProps');
        }
        componentWillMount() {
            log('componentWillMount');
        }   
        componentDidMount() {
            log('componentDidMount');
        }  
        shouldComponentUpdate() {
            log('shouldComponentUpdate');
            return true;
        }
        componentWillUpdate() {
            log('componentWillUpdate');
        }
        componentDidUpdate() {
            log('componentDidUpdate');
        }
        componentWillUnmount() {
            log('componentWillUnmount')
        }
        render() {
            log('render');
            return (
                <WrapedComponent />
            )
        }
    }
}