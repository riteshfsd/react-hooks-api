import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
            <div>
                dsds
            </div>
            <div>
                ddfdd
            </div>
            </div>
        );
    }
}

export default ClassCounter;
