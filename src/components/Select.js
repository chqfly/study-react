import React, {Component} from 'react';
// import { is, fromJS } from 'immutable';

class Select extends Component {

    constructor(props) {
        super(props);

        this.state = {
            area: ['beijing','shanghai']
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        const {options} = e.target;
        const area = Object.keys(options)
            .filter(i => options[i].selected === true)
            .map(i => options[i].value);

        this.setState({
            area
        })
    }

    render() {
        return (
            <div style={{padding: '10px'}}>
                <select multiple={true} value={this.state.area} onChange={this.handleChange}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>
                <p>{this.state.area}</p>
            </div>
        )
    }
}

export default Select;