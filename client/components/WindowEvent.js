import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WindowEvent extends Component {

	handleEvent = (event) => {
		console.log(event);
		if (this.props.onEventHandled) {
			this.props.onEventHandled(event);
		}
	}

	componentDidMount() {
		if (this.props.eventType) {
			window.addEventListener(this.props.eventType, this.handleEvent);
		}
	}

	componentWillUnmount() {
		if (this.props.eventType) {
			window.removeEventListener(this.props.eventType, this.handleEvent);
		}
	}

	render() {
		return this.props.children;
	}
};

WindowEvent.propTypes = {
    onEventHandled: PropTypes.func,
    eventType: PropTypes.string
}

export default WindowEvent;