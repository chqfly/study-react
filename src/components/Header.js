import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { is, fromJS } from 'immutable';

class Header extends Component {

    static propTypes = {
        headerName: PropTypes.string.isRequired,
    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 10
        }

        console.log('constructor');

        this.changeHeaderHeight = this.changeHeaderHeight.bind(this);
    }

    changeHeaderHeight() {
        this.setState({
            headerHeight: 30
        })
    }

    componentWillMount() {

        console.log('我是组件初始化的时候执行，componentWillMount');
    }

    componentDidMount() {
        console.log('我是组件初始化的时候执行，componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('我是组件props更新时执行，componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps,nextState) {
        
        const isUpdate = !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
        console.log(isUpdate);
        return isUpdate;
    }

    componentWillUpdate() {
        
        console.log('我是组件props更新时执行，componentWillUpdate');
    }

    componentDidUpdate() {
        
        console.log('我是组件props更新时执行，componentDidUpdate');
    }

    
    componentWillUnmount() {
        console.log('我是组件卸载时执行，componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div onClick={this.changeHeaderHeight}>I am header, my name is {this.props.headerName}, my headerHeight is {this.state.headerHeight}</div>
        )
    }
}

export default Header;