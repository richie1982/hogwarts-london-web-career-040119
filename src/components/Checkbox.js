import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <div style={{padding: "10px"}}>
            <label>Show Greased Pigs: </label>
                <input type="checkbox" onClick={this.props.toggleHogs} style={{margin: "10px"}}/>
                <select onChange={e => this.props.sortHogs(e.target.value)}>
                    <option value="none">None</option>
                    <option value="weight">Sort by: Weight</option>
                    <option value="name">Sort by: Name</option>
                </select>
            </div>

        );
    }
}

export default Checkbox;