import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WindowScroll extends Component {

	handleScroll = (event) => {
		if (this.props.onWindowScroll) {
			this.props.onWindowScroll(event);
		}
	}

	componentDidMount() {
		if (this.props.onWindowScroll) {
			window.addEventListener("scroll", this.handleScroll);
		}
	}

	componentWillUnmount() {
		if (this.props.onWindowScroll) {
			window.removeEventListener("scroll", this.handleScroll);
		}
	}

	render() {
		return this.props.children;
	}
};

WindowScroll.propTypes = {
    onWindowScroll: PropTypes.func
}

export default WindowScroll;