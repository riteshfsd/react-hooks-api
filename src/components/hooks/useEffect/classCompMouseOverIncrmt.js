import React, { Component } from 'react'

class ClassCompMouseOverIncrmt extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x: 0,
			y: 0
		}
    }
    logMousePosition = e => {
        this.setState({
            x: e.clientX, y: e.clientY
        })
    }
    componentDidMount() {
		window.addEventListener('mouseover', this.logMousePosition)
	}

	render() {
		return (
			<div>
					X - {this.state.x}  - AND - Y - {this.state.y}
			</div>
		)
	}
}

export default ClassCompMouseOverIncrmt;
