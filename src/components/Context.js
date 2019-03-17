import React, { Component } from 'react';
import HOCLifeCycle from './HOCLifeCycle';

const { Provider, Consumer } = React.createContext();

class ContextChildren1 extends Component {
    render() {
        return (
            <Consumer>
                {value => <div onClick={value.addCount}>{value.theme}</div>}
            </Consumer>
        )
    }
}

class ContextChildren2 extends Component {
    render() {
        return (
            <Consumer>
                {value => <div onClick={value.addCount}>{value.theme}</div>}
            </Consumer>
        )
    }
}

class ContextChildren3 extends Component {
    render() {
        return (
            <Consumer>
                {value => <div onClick={value.addCount}>{value.theme}</div>}
            </Consumer>
        )
    }
}


// 高阶组件封装
const EnhanceContextChildren1 = HOCLifeCycle(ContextChildren1);
const EnhanceContextChildren2 = HOCLifeCycle(ContextChildren2);
const EnhanceContextChildren3 = HOCLifeCycle(ContextChildren3);


class ContextMiddle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <EnhanceContextChildren1 />
                <EnhanceContextChildren2 />
                <EnhanceContextChildren3 />
            </div>
        )
    }
}


class ContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 1,
            addCount: this.handleChange.bind(this), // 传递函数下去，供子组件改变context中的状态
        }
    }
    handleChange() {
        this.setState({
            theme: this.state.theme + 1
        })
    }
    render() { 
        return (
            <div>
                <Provider value={this.state}>
                    <ContextMiddle />
                </Provider>
            </div>
        );
    }
}
 
export default ContextProvider;