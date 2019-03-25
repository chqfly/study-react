import React, { Component }from 'react';

class TestComponent2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'TestComponent2'
        }
    }
    render() {
        return (
            <ChildComponent {...this.state}/>
        )
    }
}

class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillMount() {
        this.setState({
            count: this.state.count + 1
        })
        console.log('componentWillMount:' + this.state.count)
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate:' + this.state.count)
        return true 
    }
    componentWillUpdate() {
        console.log('componentWillUpdate:' + this.state.count)
    }
    componentDidMount() {
        console.log('componentDidMount:' + this.state.count)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate:' + this.state.count)
    }
    render() {
        console.log('render:' + this.state.count)
        return (
            <span onClick={this.handleClick}>{this.state.count}</span>
        )
    }
}

export default TestComponent2

/** 
 * 不能够在shouldComponentUpdate\componentWillUpdate两个生命周期改变状态，否则会发生循环调用导致奔溃
 * 可以在componentWillMount\componentWillReciveProps改变状态，但是会发生合并更新，只会导致一次render,在componentDidMount/render才会体现更新后的状态，之前的生命周期状态仍然不会改变
 * 在render\componentDidMount中更改状态，会触发render
*/