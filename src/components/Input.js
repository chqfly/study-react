import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello,caifree'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value.toUpperCase()
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handleChange}/>
                <p>{this.state.inputValue}</p>
            </div>
        )
    }
}

