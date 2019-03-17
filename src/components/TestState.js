import React, { Component }from 'react';

let renderCount = 0;
class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        // 批量更新，两次合并为一次，只会导致一次render
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)

        setTimeout(() => {
            // 立即更新，执行render后，在执行下面的console
            this.setState({count: this.state.count + 1})
            console.log(this.state.count)

            // 立即更新，执行render后，在执行下面的console
            this.setState({count: this.state.count + 1})
            console.log(this.state.count)
        }, 0)
    }

    render() {
        renderCount++
        console.log('组件渲染第' + renderCount + '次')
        return (
            <span>testState</span>
        )
    }
}

export default TestComponent